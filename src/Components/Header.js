import React from "react";
import { Nav } from "./Nav";

export const Header = () => {
  return (
    <div className="border-bottom d-flex align-items-center justify-content-between">
      <h1>SmartRecipes</h1>
      <Nav />
    </div>
  );
};
