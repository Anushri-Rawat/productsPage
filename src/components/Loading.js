import React from "react";
import styled from "styled-components";

const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(
    100vh - (var(--header-height) + var(--footer-height) + 18rem)
  );

  margin-top: var(--header-height);

  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }

  .loading {
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    border: 4px solid #ccc;
    border-top-color: var(--black-color);
    animation: spinner 0.6s linear infinite;
  }
`;

const Loading = (props) => {
  return (
    <LoaderWrapper>
      <div className="loading"></div>
    </LoaderWrapper>
  );
};

export default Loading;
