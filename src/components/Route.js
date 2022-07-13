import React from "react";
import Categories from "./category";
import NewsList from "./newsList";
import { useParams } from "react-router-dom";

const Paths = () => {
  const params = useParams();
  const category = params.category || "all";

  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  );
};

export default Paths;
