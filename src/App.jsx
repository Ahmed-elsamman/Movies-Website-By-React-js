import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import NotFound from "./Pages/NotFound/NotFound";
import DetailsProduct from "./Pages/Products/DetailsProduct";
import Layout from "./Component/Layout/Layout";
import React from "react";
// ################
import Error from "./Component/Error/Error";

import { store } from "./Component/Store/Store";
import { Provider } from 'react-redux'
import PrivateMovies from "./Component/Private/PrivateMovies";
import Favorite from "./Pages/Favorite/Favorite";
function App() {
  const Products = React.lazy(() => import("./Pages/Products/Products"));

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/about", element: <About />, errorElement: <Error /> },
        { path: "/contact", element: <PrivateMovies> <Contact /> </PrivateMovies> },
        {
          path: "/products",
          element: (
            <React.Suspense fallback={<h1>Loading.........</h1>}>
              <Products />
            </React.Suspense>
          ),
        },
        { path: "/favorite", element: <Favorite />},
        { path: "/product/:id", element: <DetailsProduct /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
