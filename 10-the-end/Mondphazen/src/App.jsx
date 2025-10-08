import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Cart from "./pages/Cart";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { fetchWatches } from "./api/watches";
import { useEffect, useState } from "react";

export default function App() {
  const [watches, setWatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(function () {
    fetchWatches().then((data) => {
      setWatches(data);
      setLoading(false);
    });
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home watches={watches.slice(0, 3)} loading={loading} />,
        },
        {
          path: "/store",
          element: <Store watches={watches} loading={loading} />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
