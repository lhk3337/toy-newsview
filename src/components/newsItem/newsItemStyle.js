import styled from "styled-components";
export const NewsItemBlock = styled.div`
  display: flex;
  border: 2px solid black;
  padding: 16px;
  border-radius: 10px;
  margin-top: 34px;
  .thumbnail {
    margin-right: 1rem;
  }
  img {
    display: block;
    width: 160px;
    height: 160px;
    border-radius: 10px;
    border: 1px solid #ffff;
    object-fit: cover;
  }
  .contents {
    h2 {
      margin: 0;
      a {
        color: black;
        font-size: 24px;
        color: #2c3e50;
        font-weight: 700;
        text-decoration: underline;
      }
    }
    p {
      margin: 0;
      font-size: 16px;
      line-height: 1.5;
      margin-top: 1.5rem;

      white-space: normal;
    }
  }
  & + & {
    margin-top: 4rem;
  }
`;
