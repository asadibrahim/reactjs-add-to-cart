import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductsPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import CartPage from "../pages/CartPage";
function Routes() {
    const LayOuts = () => {
        return (
            <>
                <Navbar />
                <Outlet />
            </>
        )
    }

    const BrowserRoutes = createBrowserRouter([
        {
            path: "/",
            element: <LayOuts />,
            children: [

                {
                    path: "/",
                    element: <HomePage />
                },
                {
                    path: "/products",
                    element: <ProductPage />
                },
                {
                    path: "/cart",
                    element: <CartPage />
                },
                {
                    path:"/product/:id",
                    element:<ProductDetailsPage />
                },
            ]
        }
    ])

    return (
        <RouterProvider router={BrowserRoutes} />
    )
}
export default Routes;