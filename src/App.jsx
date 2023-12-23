import React from "react";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar/Navbar";
import PageNotFound from "./Components/PageNotFound";
import Products from "./Components/ProductComponent/Product";
import Shirts from "./Components/ProductComponent/Shirts";
import Jeans from "./Components/ProductComponent/Jeans";
import Users from "./Components/UserComponent/Users";
import UserDetail from "./Components/UserComponent/UserDetail";
import Admin from "./Components/Admin/Admin";

const App = () => {
  const navigate = useNavigate();

  //? ______________________________________________________
  //Navigate To Multiple Component with  single eventHandler
  const NavigateAll = (url) => {
    navigate(url);
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />}>
          <Route index element={<Shirts />}></Route>
          <Route path="shirts" element={<Shirts />} />
          <Route path="jeans" element={<Jeans />} />
        </Route>

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/users" element={<Users />}>
          {/* <Route path="/users/:id" element={<UserDetail />} />
          <Route path="/users/admin" element={<Admin />} /> */}
          <Route path=":id" element={<UserDetail />} />
          <Route path="admin" element={<Admin />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>

      {/*//! ___________________________________ */}

      <button onClick={() => navigate(-1)}>Go Back</button>
    </>
  );
};

export default App;
