import React from "react";

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootlayOut from "./components/layout/RootlayOut";
import Home from "./components/page/Home";
import { Shop } from "./components/page/Shop";
import SignUp from "./components/page/SignUp";
import Login from "./components/page/Login";
import ProductDetails from "./components/page/ProductDetails";
import TestItem from "./components/page/TestItem";
import About from "./components/page/About";
import Contacts from "./components/page/Contacts";
import MyAccount from "./components/page/MyAccount";
import Journal from "./components/page/Journal";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootlayOut />}>
      <Route index element={<Home />}></Route>
      <Route path="/products" element={<Shop />}></Route>
      <Route path="/product/details" element={<ProductDetails />}></Route>
      <Route path="/Sign/Up" element={<SignUp />}></Route>
      <Route path="/Login" element={<Login />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contacts" element={<Contacts />}></Route>
      <Route path="/myaccount" element={<MyAccount />}></Route>
      <Route path="/journal" element={<Journal />}></Route>
      {/* <Route path='/test' element={<TestItem/>}></Route> */}
    </Route>
  )
);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
