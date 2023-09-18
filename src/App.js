import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import { addUser, removeUser } from "./slice/userSlice";
import { auth } from "./utils/firebase";
import appStore from "./store/appStore";
import { onAuthStateChanged } from "firebase/auth";

const AppLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, uid, displayName } = user;
        dispatch(addUser({ uid: uid, displayName: displayName, email: email }));
        navigate('/browse');
      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });
  }, []);
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const  App = () => {
  const AppRoute = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/browse",
          element: <Home />,
        },
        {
          path: "/",
          element: <SignIn />,
        },
      ],
    },
  ]);
  return (
    <Provider store={appStore}>
      <RouterProvider router={AppRoute} />
    </Provider>
  );
}

export default App;
