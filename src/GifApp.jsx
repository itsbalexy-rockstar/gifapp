import React from "react";
import Navbar from "./components/Navbar";
import { useState } from "react";
import GifCollection from "./components/GifCollection";

const GifApp = ({defaultCategories = []}) => {
  const [categories, setCategories] = useState(defaultCategories);
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
