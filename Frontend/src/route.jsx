import Home from "./Home/Home.jsx";
import AboutUs from "./About/about.jsx";
import Contact from "./Contact/contactus.jsx";
import Policy from "./Privacy/Policy.jsx";
import Soon from "./coming.jsx";
import Header from "./Header/Header.jsx";

import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary.jsx";

function Rout() {
  const router = createBrowserRouter([
    { path: "/", element: <Home />, errorElement: <ErrorBoundary /> },
    {
      path: "/aboutus",
      element: <AboutUs />,
      errorElement: <ErrorBoundary />,
    },
    {
      path: "/contactus",
      element: <Contact />,
      errorElement: <ErrorBoundary />,
    },
    {
      path: "/policy",
      element: <Policy />,
      errorElement: <ErrorBoundary />,
    },
    {
      path: "/Header",
      element: <Header />,
      errorElement: <ErrorBoundary />,
    },
    {
      path: "/soon",
      element: <Soon />,
      errorElement: <ErrorBoundary />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Rout;
