import axios from "axios";

async function postProduct(item) {
  const route = process.env.REACT_APP_API_ROUTE;

  const formData = new FormData();
  formData.append("title", item.Title);
  formData.append("description", item.Description);
  formData.append("Category", item.Category);
  formData.append("Price", item.Price);
  formData.append("productImage", item.Image);

  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };

  const response = await axios.post(`${route}/products`, formData, config);
  return response;
}

async function getProducts() {
  const route = process.env.REACT_APP_API_ROUTE;
  const response = await axios.get(`${route}/products`);
  return response;
}

export { postProduct, getProducts };
