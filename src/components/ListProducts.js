import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "./Button";
import { useFilterContext } from "../context/filterContext";

const Wrapper = styled.div`
  margin-top: 2rem;
`;

const ProductCard = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
  background: var(--white-color);
  padding: 1.5rem;
  border-radius: var(--radius);
  transition: var(--transition);
  transform: scale(1);
  &:hover {
    box-shadow: 0 0 1rem 1rem var(--gray-color-2);
  }
`;

const ProductImage = styled.div`
  img {
    width: min(25vw, 220px);
    height: 20rem;
    object-fit: cover;
  }
`;
const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  h3 {
    font-size: var(--fs-500);
    min-height: 2.2rem;
    color: var(--black-color);
  }
  p {
    font-size: var(--fs-500);
    color: var(--gray-color-1);
  }

  .price {
    font-size: 1.8rem;
    color: var(--gray-color-1);
  }

  button {
    width: max-content;
  }
`;

const ListProducts = ({ products }) => {
  const { page, recordsPerPage } = useFilterContext();
  const lastIndex = page * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  return (
    <Wrapper>
      {products
        .slice(firstIndex, lastIndex)
        .map(({ title, image, id, price, description }) => (
          <ProductCard key={id}>
            <ProductImage>
              <img src={image} alt={title} />
            </ProductImage>
            <ProductInfo>
              <h3>{title}</h3>
              <p className="price">${price}</p>
              <p>{description}</p>
              <Button variant="primary">Details</Button>
            </ProductInfo>
          </ProductCard>
        ))}
    </Wrapper>
  );
};

export default ListProducts;
