import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../components";

const ErrorPage = () => {
  return (
    <Wrapper>
      <div className="container">
        <div>
          <h2>404</h2>
          <h3>UH OH! You're lost.</h3>
          <p>
            The page you are looking for does not exist. How you got here is a
            mystery. But you can click the button below to go back to the
            homepage.
          </p>

          <NavLink to="/">
            <Button variant="primary">Go Back to Home</Button>
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
      font-size: 9rem;
      color: var(--black-color);
    }

    h3 {
      font-size: 3.6rem;
      color: var(--gray-color-1);
    }

    p {
      margin: 2rem 0;
      font-size: var(--fs-500);
      color: var(--gray-color-1);
    }
  }
`;

export default ErrorPage;
