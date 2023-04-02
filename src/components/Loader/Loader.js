import React from "react";
import "./Loader.css";
const Loader = () => {
  console.log("Loading is going")
  return (
    <div className="loader">
      <div className="loader-square"></div>
      <div className="loader-square"></div>
      <div className="loader-square"></div>
      <div className="loader-square"></div>
      <div className="loader-square"></div>
      <div className="loader-square"></div>
      <div className="loader-square"></div>
    </div>
  );
};

export default Loader;
