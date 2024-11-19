import { IProduct } from "@/type/type";
import axios from "axios";

export const getProductsApi = async () => {
  const { data } = await axios.get("https://api.escuelajs.co/api/v1/products");
  return data;
};

export const getProductByIdApi = async (id: number) => {
  const { data } = await axios.get(
    "https://api.escuelajs.co/api/v1/products/" + id
  );
  return data;
};

export const searchProductsByTitleApi = async (text: string) => {
  const { data } = await axios.get(
    "https://api.escuelajs.co/api/v1/products/?title=" + text
  );
  return data;
};

export const getProductsByCategoryApi = async (id: number) => {
  const { data } = await axios.get(
    "https://api.escuelajs.co/api/v1/products/?categoryId=" + id
  );
  return data;
};

export const createProductApi = async (obj: IProduct) => {
  const { data } = await axios.post(
    "https://api.escuelajs.co/api/v1/products/",
    obj
  );
  return data;
};

export const updateProductApi = async ({
  id,
  obj,
}: {
  id: number;
  obj: IProduct;
}) => {
  const { data } = await axios.put(
    "https://api.escuelajs.co/api/v1/products/" + id,
    obj
  );
  return data;
};

export const deleteProductByIdApi = async (id: number) => {
  const { data } = await axios.delete(
    "https://api.escuelajs.co/api/v1/products/" + id
  );
  return data;
};
