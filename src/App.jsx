import React from "react";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  const navigate = useNavigate();

  //condition base navigation
  // const NavigateFunction = () => {
  //   navigate("/contact");
  // };

  //? ______________________________________________________
  //Navigate To Multiple Component with  single eventHandler
  const NavigateAll = (url) => {
    navigate(url);
  };

  //? ______________________________________________________
  //navigate through condition
  // const NavigateToWhere = () => {
  //   let name = "waqas";
  //   if (name == "waqas") {
  //     navigate("/about");
  //   } else {
  //     navigate("/contact");
  //   }
  // };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <button
        className="bg-blue-700 flex  gap-2 justify-between m-2 px-3 rounded-md text-white"
        onClick={() => navigate("/about")}
      >
        About
      </button> */}
      {/* <button
        className="bg-blue-700 flex  gap-2 justify-between m-2 px-3 rounded-md text-white"
        onClick={() => navigate("/contact")}
      >
        Contact
      </button> */}
      {/* <button
        className="bg-blue-700 flex  gap-2 justify-between m-2 px-3 rounded-md text-white"
        onClick={() => NavigateFunction()}
      >
        Contact
      </button> */}
      {/* //?______________________________________________________ */}
      <button
        className="bg-blue-700 flex  gap-2 justify-between m-2 px-3 rounded-md text-white"
        onClick={() => NavigateAll("/about")}
      >
        About
      </button>
      <button
        className="bg-blue-700 flex  gap-2 justify-between m-2 px-3 rounded-md text-white"
        onClick={() => NavigateAll("/contact")}
      >
        Contact
      </button>
      {/* //?________________________ Navigate Through Condition ______________________________ */}
      {/* <button
        className="bg-blue-700 flex  gap-2 justify-between m-2 px-3 rounded-md text-white"
        onClick={() => NavigateToWhere()}
      >
        Click Me
      </button> */}

      <button onClick={() => navigate(-1)}>Go Back</button>
    </>
  );
};

export default App;
