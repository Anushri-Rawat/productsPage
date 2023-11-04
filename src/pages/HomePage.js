import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../components";

const HomePage = () => {
  return (
    <Wrapper>
      <div className="container">
        <div>
          <h2>Welcome to Shopzee</h2>
          <h3>Please go to products page.</h3>

          <NavLink to="/products">
            <Button variant="primary">All Products</Button>
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: calc(
      100vh - (var(--header-height) + var(--footer-height) + 1rem)
    );
    text-align: center;

    h2 {
      font-size: 6rem;
      color: var(--black-color);
    }

    h3 {
      font-size: 3.2rem;
      color: var(--gray-color-1);
      margin-bottom: 2rem;
    }
  }
`;

export default HomePage;
