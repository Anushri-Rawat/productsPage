import React from "react";
import styled from "styled-components";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from "../context/filterContext";

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
  padding-left: 16px;

  .sorting-list--grid {
    display: flex;
    gap: 1rem;

    .sort-btn {
      padding: 0.8rem 1rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    .icon {
      font-size: 1.6rem;
    }
    .active {
      background-color: #000;
      color: var(--white-color);
    }
  }
  .product-data {
    display: flex;
    align-items: center;
    p {
      font-size: var(--fs-500);
      color: var(--gray-color-1);
    }
  }
  .search__input {
    background: var(--blue-color-3);
    border-radius: 0.5rem;
    padding: 1rem;
    width: min(100%, 200px);
    font-size: var(--fs-400);
    label {
      color: var(--blue-color-1);
      margin-right: 0.2rem;
      font-size: var(--fs-400);
    }

    option {
      color: var(--gray-color-1);
      font-size: var(--fs-500);
      padding: 0.5rem;
    }
  }
`;

const Sort = () => {
  const { filter_products, grid_view, setGridView, setListView, sorting } =
    useFilterContext();
  return (
    <Wrapper className="sort-section">
      <div className="sorting-list--grid">
        <button
          className={grid_view ? "active sort-btn" : "sort-btn"}
          onClick={setGridView}
        >
          <BsFillGridFill className="icon" />
        </button>

        <button
          className={!grid_view ? "active sort-btn" : " sort-btn"}
          onClick={setListView}
        >
          <BsList className="icon" />
        </button>
      </div>
      <div className="product-data">
        <p>{`${filter_products.length} Product Available`}</p>
      </div>

      <div className="sort-selection">
        <form action="#">
          <label htmlFor="sort"></label>
          <select
            name="sort"
            id="sort"
            className="search__input"
            onClick={sorting}
          >
            <option value="lowest">Price(lowest)</option>
            <option value="highest">Price(highest)</option>
            <option value="a-z">Price(a-z)</option>
            <option value="z-a">Price(z-a)</option>
          </select>
        </form>
      </div>
    </Wrapper>
  );
};

export default Sort;
