import React from "react";
import { CategoriesBlock, Category } from "./CategoryStyle";
import { categoryList } from "../../util/categorylist";

const Categories = () => {
  return (
    <CategoriesBlock>
      {categoryList.map((c) => (
        <Category
          key={c.name}
          className={({ isActive }) => (isActive ? "active" : undefined)}
          to={c.name === "all" ? "/" : `/${c.name}`}
        >
          {c.text}
        </Category>
      ))}
    </CategoriesBlock>
  );
};

export default Categories;
