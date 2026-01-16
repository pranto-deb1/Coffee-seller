import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Layout from "./Layout";
import Home from "./Pages/HomePage/Home";
import About from "./Pages/About/About";
import Blog from "./Pages/Blog/Blog";
import MenuPage from "./Pages/Menu/Menus/MenuPage";

import CoffeeMenuPage from "./Pages/Menu/Coffee Menu/CoffeeMenuPage";
import ShopPage from "./Pages/Menu/Shop/ShopPage";
import Contact from "./Pages/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "blog", Component: Blog },
      {
        path: "/menus",
        Component: MenuPage,
      },
      { path: "coffee-menu", Component: CoffeeMenuPage },
      { path: "shop", Component: ShopPage },
      { path: "contact", Component: Contact },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
