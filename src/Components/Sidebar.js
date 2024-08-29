import React, { useEffect, useRef, useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import "Styles/Desktop/Sidebar.css";
import { getSidebarData } from "Services/barsServices";
import { CategoriesContext } from "Contexts/CategoriesContext";

function Sidebar({ setProductsToShow = () => {} }) {
  const [sidenavItems, setSidenavItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState("Dish");
  const { categories } = useContext(CategoriesContext);
  const location = useLocation();
  const stopRender = useRef(false);

  useEffect(() => {
    stopRender.current = true;
    if (stopRender.current === true) {
      if (location.pathname.startsWith("/pos-sys")) {
        const sidebarItems = categories.map((category) => ({
          Name: category.Category,
        }));
        setSidenavItems(sidebarItems);
      }
      stopRender.current = false;
    }
  }, [location.pathname, categories]);

  useEffect(() => {
    stopRender.current = true;
    if (stopRender.current === true) {
      async function fetchCategories() {
        getSidebarData(location, setSidenavItems);
      }
      fetchCategories();
      stopRender.current = false;
    }
  }, [location]);

  useEffect(() => {
    const storedActiveCategory = sessionStorage.getItem("Active-Category");
    setActiveCategory(storedActiveCategory);
    setProductsToShow(storedActiveCategory);
  }, [setProductsToShow]);

  const handleSession = (categoryName) => {
    sessionStorage.setItem("Active-Category", categoryName);
    setActiveCategory(categoryName);
    setProductsToShow(categoryName);
  };

  return (
    <React.Fragment>
      <div className="sidebar-Container">
        <ul className="sidenav-list">
          {sidenavItems.map((item, index) => (
            <li key={index}>
              {location.pathname.startsWith("/admin") ? (
                item.type === "link" && (
                  <Link
                    to={item.url}
                    className={location.pathname === item.url ? "active" : ""}
                  >
                    <strong>{item.text}</strong>
                  </Link>
                )
              ) : (
                <span
                  className={activeCategory === item.Name ? "active" : ""}
                  onClick={() => handleSession(item.Name)}
                >
                  {item.Name}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
}

export default Sidebar;
