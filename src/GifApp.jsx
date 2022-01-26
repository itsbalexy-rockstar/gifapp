import React from "react";
import Navbar from "./components/Navbar";
import { useState } from "react";
import GifCollection from "./components/GifCollection";

const GifApp = () => {
  const [categories, setCategories] = useState([]);
  return (
    <>
      <Navbar setCategories={setCategories} />
      <ul>
        {categories.map((category, idx) => (
          <GifCollection key={idx} category={category} />
        ))}
      </ul>
    </>
  );
};

export default GifApp;
