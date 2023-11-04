import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/filterContext";
import { useProductContext } from "../context/productContext";
import { Loading, Error, GridProducts, ListProducts, Pagination } from ".";

const H4 = styled.h4`
  margin-top: 2rem;
  font-size: var(--fs-500);
  color: var(--black-color);
`;

const ProductList = () => {
  const { filter_products: products, grid_view } = useFilterContext();
  const { isLoading: loading, isError: error } = useProductContext();

  if (error) {
    return <Error />;
  }

  if (loading) {
    return <Loading />;
  }

  if (products.length < 1) {
    return <H4>Sorry, no products matched</H4>;
  } else {
    return (
      <>
        {grid_view === false ? (
          <ListProducts products={products} />
        ) : (
          <GridProducts products={products} />
        )}
        <Pagination />
      </>
    );
  }
};
export default ProductList;
