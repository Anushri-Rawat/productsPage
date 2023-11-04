import React from "react";
import styled from "styled-components";

import { Filters, ProductList, Sort } from "../components";

const Wrapper = styled.section`
  padding: 1rem;
  @media (min-width: 992px) {
    display: grid;
    gap: 3rem 2rem;
    grid-template-columns: 220px 1fr;
  }
`;

const ProductsPage = () => {
  return (
    <main>
      <Wrapper>
        <Filters />
        <div>
          <Sort />
          <ProductList />
        </div>
      </Wrapper>
    </main>
  );
};

export default ProductsPage;
