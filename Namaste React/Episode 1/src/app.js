import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import About from "./component/About";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body /> 
    </div>
  );
};
const appRoter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
  {
    path: "/about",
    element:<About />
  },
  {
    path: "/contact",
    element:<About />
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoter} />);
