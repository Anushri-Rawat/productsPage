import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Stars from "./Stars";
import formatPrice from "../utils/formatPrice";
import { useFilterContext } from "../context/filterContext";

const Wrapper = styled.div`
  display: grid;
  gap: 2rem 1.5rem;
  justify-content: center;
  width: 100%;
  margin-top: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const ProductCard = styled.div`
  padding: 1rem;
  background: var(--white-color);
  border-radius: var(--radius);
  transition: var(--transition);

  &:hover {
    box-shadow: 0 0 1rem 1rem var(--gray-color-2);
  }
  h3 {
    font-size: var(--fs-500);
    color: var(--black-color);
    margin: 1rem 0;
    min-height: 2.4rem;
  }
  img {
    width: 100%;
    height: 65%;
    object-fit: cover;
  }
`;

const Rating = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 1.8rem;
    color: var(--gray-color-1);
  }
`;

const GridProducts = ({ products }) => {
  const { page, recordsPerPage } = useFilterContext();
  const lastIndex = page * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  return (
    <Wrapper>
      {products
        .slice(firstIndex, lastIndex)
        .map(({ name, id, image, price }) => (
          <ProductCard key={id}>
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <Rating>
              <p>{formatPrice(price)}</p>
              <Stars rate={Math.random() * 4 + 1} />
            </Rating>
          </ProductCard>
        ))}
    </Wrapper>
  );
};

export default GridProducts;
