import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import "Styles/Desktop/Products.css";
import { CategoriesContext } from "Contexts/CategoriesContext";
import handlePostProduct from "Utilities/postProducts";
import fetchProducts from "Utilities/fetchProducts";

function Products() {
  const { categories } = useContext(CategoriesContext);

  const [item, setItem] = useState({
    Title: "",
    Description: "",
    Category: "",
    Price: 0,
    productImage: null,
  });

  const formRef = useRef(null);

  const [products, setProducts] = useState([]);

  const productKeys = products.length > 0 ? Object.keys(products[0]) : [];
  const Tableconfig = [
    "Title",
    "Description",
    "Category",
    "Price",
    "Image",
    "Edit",
  ];

  const stopRender = useRef(true);

  const fetchProductsList = useCallback(async () => {
    const config = ["Title", "Description", "Category", "Price", "Image"];
    await fetchProducts(setProducts, config);
  }, [setProducts]);

  useEffect(() => {
    if (stopRender.current === true) {
      fetchProductsList();
      stopRender.current = false;
    }
  }, [fetchProductsList]);

  const handleChanges = (e) => {
    e.preventDefault();
    if (e.target.name === "Image") {
      setItem({
        ...item,
        Image: e.target.files[0],
      });
    } else {
      setItem({
        ...item,
        [e.target.name]: e.target.value,
      });
    }
  };
  const addProduct = async (e) => {
    e.preventDefault();
    await handlePostProduct(item);
    await fetchProductsList();
    setItem({
      Title: "",
      Description: "",
      Category: "",
      Price: 0,
      productImage: null,
    });
    formRef.current.reset();
  };
  return (
    <React.Fragment>
      <div className="products-Container">
        <h1>Welcome to Products</h1>
        <div className="products-Content">
          <form ref={formRef} className="products-form" onSubmit={addProduct}>
            <input
              type="text"
              name="Title"
              required
              placeholder="Title"
              onChange={handleChanges}
            />
            <input
              type="text"
              name="Description"
              required
              placeholder="Description"
              onChange={handleChanges}
            />
            <select name="Category" onChange={handleChanges}>
              <option>--Select Category</option>
              {categories.map((category) => (
                <option key={category.Number} value={category.Number}>
                  {category.Category}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="Price"
              required
              placeholder="Price"
              onChange={handleChanges}
            />
            <input name="Image" type="file" required onChange={handleChanges} />
            <button type="submit">Add Product</button>
          </form>
          <div className="table-Container">
            <table className="products-Table">
              <thead>
                <tr>
                  {productKeys.map((key) => (
                    <th key={key}>{key}</th>
                  ))}
                  {productKeys ? null : <th>Action</th>}
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr key={index}>
                    {productKeys.map((key) => (
                      <td key={key}>
                        {key === "Price"
                          ? `${product[key]}$`
                          : product[key] === null
                          ? "null"
                          : product[key]}
                      </td>
                    ))}
                    <td id="products-action-Table">
                      <button>Update</button>
                      <button>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Products;
