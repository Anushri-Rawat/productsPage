import styled, { css } from "styled-components";

const Button = styled.button`
  border-radius: var(--radius);
  transition: var(--transition);
  letter-spacing: 1px;
  font-size: var(--fs-400);
  font-weight: bold;

  a {
    display: inline-block;
  }
  ${(props) => {
    switch (props.variant) {
      case "primary":
        return css`
          background: var(--black-color);
          color: var(--white-color);
          border: 0.2rem solid var(--black-color);
          padding: 6px 18px;
          a {
            padding: 0.75rem 1.5rem;
            color: var(--white-color);
          }
          &:hover {
            background-color: var(--white-color);
            color: var(--black-color);
            a {
              color: var(--black-color);
            }
          }
        `;

      case "secondary":
        return css`
          border: 0.2rem solid var(--black-color);
          padding: 6px 18px;
          a {
            padding: 0.75rem 1.5rem;
          }
          &:hover {
            background: var(--black-color);
            color: var(--white-color);
            a {
              color: var(--white-color);
            }
          }
        `;

      default:
        break;
    }
  }}
`;
export default Button;
