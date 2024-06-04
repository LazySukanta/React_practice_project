import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
// import About from "./component/About";
import Contact from "./component/Contact";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestaurantMenu from "./component/Restaurantmenu";
import Shimmer from "./component/Shimmer.js";
import UserContext from "./utils/UserContext.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
// import Grocery from "./component/Grocery";
//Lazy Loading

const Grocery = lazy(() => import("./component/Grocery"));
const About = lazy(() => import("./component/About.js"));

const AppLayout = () => {
  //Authentication
  const [userName, SetUserName] = useState();
  useEffect(() => {
    //Make a api call and send userNAme and PAsword
    const data = {
      name: "Sukanta",
    };
    SetUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{ loggedInUser: userName, SetUserName }}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
    </Provider>
  );
};
const appRoter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },

      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },

      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoter} />);
