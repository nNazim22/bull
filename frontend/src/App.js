import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import HomePage from "./page/HomePage";
import Product from "./page/Product";
import Products from "./page/Products";
// import Contact from "./page/Contact";
// import products from "./data/product";
import CartProvider from "./context/CartContext";
import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");

      setProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<HomePage />} />
            <Route path="produits" element={<Products products={products} />} />
            <Route
              path="produits/:id"
              element={<Product products={products} />}
            />
            {/* <Route path="contact" element={<Contact />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>

      {/* <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: { duration: 3000 },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "#fff",
            color: "#000",
          },
        }}
      /> */}
    </CartProvider>
  );
}
