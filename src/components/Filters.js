import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/filterContext";
import { Button } from ".";
import { FaCheck } from "react-icons/fa";
import formatPrice from "../utils/formatPrice";

const Wrapper = styled.div`
  padding: 3rem 0;
  .content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: sticky;
    top: 0;
  }

  .filter__form {
    display: grid;
    gap: 2rem;
  }

  h4 {
    font-size: var(--fs-500);
    color: var(--black-color);
  }

  .search__input {
    background: var(--blue-color-3);
    border-radius: 0.5rem;
    padding: 1rem;
    width: min(100%, 200px);
    font-size: var(--fs-400);
  }

  .form__control > *:not(:first-child) {
    margin-top: 1rem;
  }

  .form__categories {
    display: grid;
    justify-items: flex-start;
    gap: 1rem;

    button {
      color: var(--blue-color-1);
      font-size: var(--fs-500);
      padding-right: 0.5rem;
      text-transform: capitalize;
      transition: var(--transition);
      border-bottom: 0.3rem solid transparent;
      background: none;
      &:hover {
        padding-left: 0.5rem;
      }
    }

    .active {
      border-bottom-color: var(--black-color);
      padding-left: 0.5rem;
    }
  }

  .price {
    color: var(--gray-color-1);
    font-size: var(--fs-500);
  }

  .clear-btn {
    margin-block: 2rem;
    padding: 0.75rem 1.5rem;
  }
  .company {
    option {
      color: var(--gray-color-1);
      font-size: var(--fs-500);
      padding: 0.5rem;
    }
  }
  .filter-color-style {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }
`;

const getUniqueData = (data, type) => {
  let unique = data.map((item) => item[type]);
  return ["all", ...new Set(unique)];
};

const getUniqueColor = (data, type) => {
  const uniqueColorsSet = new Set();
  data.forEach((item) =>
    item[type].forEach((color) => {
      uniqueColorsSet.add(color);
    })
  );
  const uniqueColorsArray = type
    ? ["all", ...Array.from(uniqueColorsSet)]
    : Array.from(uniqueColorsSet);

  return uniqueColorsArray;
};

const Filters = () => {
  const {
    filters: { text, minPrice, maxPrice, price, color, category, company },
    updateFilterValue,
    all_products,
    clearFilters,
  } = useFilterContext();

  const categoryData = getUniqueData(all_products, "category");
  const companyData = getUniqueData(all_products, "company");
  const colorsData = getUniqueColor(all_products, "colors");

  return (
    <Wrapper>
      <div className="content">
        <form className="filter__form" onSubmit={(e) => e.preventDefault()}>
          <div className="form__control">
            <input
              type="text"
              name="text"
              placeholder="Search"
              className="search__input"
              value={text}
              onChange={updateFilterValue}
            />
          </div>
        </form>

        <div className="form__control">
          <h4>Category</h4>
          <div className="form__categories">
            {categoryData.map((curElem, index) => {
              return (
                <button
                  key={index}
                  type="button"
                  name="category"
                  value={curElem}
                  className={curElem === category ? "active" : ""}
                  onClick={updateFilterValue}
                >
                  {curElem}
                </button>
              );
            })}
          </div>
        </div>

        <div className="form__control">
          <h4>Company</h4>

          <form action="#">
            <select
              name="company"
              id="company"
              className="search__input company"
              onClick={updateFilterValue}
            >
              {companyData.map((curElem, index) => {
                return (
                  <option key={index} value={curElem} name="company">
                    {curElem}
                  </option>
                );
              })}
            </select>
          </form>
        </div>

        <div className="form__control colors">
          <h4>Colors</h4>

          <div className="filter-color-style">
            {colorsData.map((curColor, index) => {
              if (curColor === "all") {
                return (
                  <button
                    key={index}
                    type="button"
                    value={curColor}
                    name="color"
                    className="color-all--style"
                    onClick={updateFilterValue}
                  >
                    all
                  </button>
                );
              }
              return (
                <button
                  key={index}
                  type="button"
                  value={curColor}
                  name="color"
                  style={{ backgroundColor: curColor }}
                  className={
                    color === curColor ? "btnStyle active" : "btnStyle"
                  }
                  onClick={updateFilterValue}
                >
                  {color === curColor ? (
                    <FaCheck className="checkStyle" />
                  ) : null}
                </button>
              );
            })}
          </div>
        </div>

        <div className="form__control">
          <h4>Price</h4>
          <p className="price">{price / 100}</p>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            value={price}
            onChange={updateFilterValue}
          />
        </div>
        <Button variant="primary" className="clear-btn" onClick={clearFilters}>
          Reset Filters
        </Button>
      </div>
    </Wrapper>
  );
};

export default Filters;
