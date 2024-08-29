import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import LoginAuth from "Services/Authentication";
import Cookies from "js-cookie";

export function useLogin() {
  const navigate = useNavigate();
  async function login(userData) {
    try {
      const response = await LoginAuth(userData);
      const { status, data } = response;
      if (status === 200) {
        navigate("/admin");
        Cookies.set("token", data.token);
        Cookies.set("Name", data.Name);
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert("Invalid email or password");
      }
      console.error(`Something went wrong: ${error}`);
    }
  }
  return { login };
}

export function Authenticated() {
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      setAuthenticated(true);
      const User = Cookies.get("Name");
      if (User && location.pathname === "/login") {
        if (User === "Admin") {
          navigate("/admin", { replace: true });
        }
      }
    } else if (
      !authenticated &&
      (location.pathname.startsWith("/admin") ||
        location.pathname.startsWith("/pos-sys"))
    ) {
      navigate("/", { replace: true });
    }
  }, [authenticated, location.pathname, navigate]);
  return null;
}
