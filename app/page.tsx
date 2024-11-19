import type { Metadata } from "next";
import Products from "./components/Products";

export default function ProductsPage() {
  return (
    <Products/>
  );
}

export const metadata: Metadata = {
  title: "Products",
};
