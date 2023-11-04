import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--red-color-1);
`;

const H2 = styled.h2`
  font-size: var(--fs-600);
  color: var(--gray-color-1);
`;

const Error = () => {
  return (
    <Wrapper>
      <H2>Something went wrong Wrong </H2>
    </Wrapper>
  );
};

export default Error;
