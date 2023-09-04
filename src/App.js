import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import Header from "./components/Header";
import Footer from "./components/Footer";

const AppLayout = () => {
  return (<div>
      <Header/>
      <Outlet/>
      <Footer/>
  </div>);
};

const AppRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { 
        path: "/",
        element: <Home />
      },
      {
        path: "/signIn",
        element: <SignIn />
      },
      ],
  },
]);

function App() {
  return <RouterProvider router={AppRoute} />;
}

export default App;
