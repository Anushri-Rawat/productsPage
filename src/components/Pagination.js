import React from "react";
import { useFilterContext } from "../context/filterContext";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 2rem auto 3rem;
  button {
    padding: 0.8rem 2.2rem;
    border: none;
    font-size: 1.6rem;
    background-color: var(--gray-color-1);
    color: #ffffff;
    cursor: pointer;
    display: inline-block;
    opacity: 1;
  }
  button:hover {
    opacity: 0.8;
  }
  .active {
    background-color: var(--black-color);
  }
`;

const Pagination = () => {
  const { page, nPages, changePage, prevPage, nextPage } = useFilterContext();
  const pageNumber = [...Array(nPages + 1).keys()].slice(1);

  return (
    <Wrapper>
      <button onClick={prevPage}>Prev</button>
      {pageNumber.map((item, i) => (
        <button
          className={`${page === item ? "active" : ""}`}
          key={i}
          onClick={() => changePage(item)}
        >
          {item}
        </button>
      ))}
      <button onClick={nextPage}>Next</button>
    </Wrapper>
  );
};

export default Pagination;
