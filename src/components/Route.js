import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Categories from "./Categories";
import NewsItem from "./NewsItem";
import { useParams } from "react-router-dom";
const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    paddig-left: 1rem;
    padding-right: 1rem;
  }
`;

const Paths = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const params = useParams();
  console.log(params.category);

  const category = params.category || "all";
  console.log(category);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = category === "all" ? "" : `&category=${category}`;
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=d843320ad5ad402d9e0d1cf39503d60d`
        );

        setData(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [category]);

  if (loading) {
    return <NewsListBlock>Waiting...</NewsListBlock>;
  }
  if (!data) {
    return null;
  }
  return (
    <>
      <Categories />
      {data?.map((article, index) => (
        <NewsItem article={article} key={index} />
      ))}
    </>
  );
};

export default Paths;
