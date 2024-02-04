import React from "react";
import { GlobalContext } from "./context";
import router from "./routers";
import { RouterProvider } from "react-router-dom";

const App = () => {
  const user = {
    username: "Nabila",
  };

  return (
    <>
      <GlobalContext.Provider value={user}>
        <RouterProvider router={router} />
      </GlobalContext.Provider>
    </>
  );
};

export default App;
