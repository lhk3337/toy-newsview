import React, { useState, useEffect } from "react";
import axios from "axios";
import { NewsListBlock } from "./NewsListStyle";
import NewsItem from "../newsItem";

const NewsList = ({ category }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

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
    <NewsListBlock>
      {data?.map((article, index) => (
        <NewsItem article={article} key={index} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
