import { createBrowserRouter } from "react-router-dom";
import DataJSON from "../pages";

import About from "../Components/About";
import Blog from "../pages/blogs";
import BlogDetail from "../pages/blogs/_id";

import RootLayout from "../layout/rootLayout";
import { posts, postsDetail } from "../apis/loader";
import ErrorPage from "../pages/errorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <DataJSON />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
        loader: posts,
      },
      {
        path: "/blog/:id",
        element: <BlogDetail />,
        loader: postsDetail,
      },
    ],
  },
]);

export default router;
