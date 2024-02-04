import { createBrowserRouter } from "react-router-dom";
import DataJSON from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DataJSON />,
  },
]);

export default router;
