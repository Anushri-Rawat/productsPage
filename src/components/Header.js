import React from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";

export const links = [
  { id: 1, text: "Home", url: "/" },
  { id: 2, text: "Products", url: "/products" },
];

const FaShoppingCartStyled = styled(FaShoppingCart)`
  font-size: 2rem;
  color: var(--gray-color-1);
`;

const HeaderWrapper = styled.header`
  height: var(--header-height);
  display: flex;
  align-items: center;
  padding: 2rem;
  box-shadow: 0 0 5rem 0.5rem var(--bg-color);
  position: fixed;
  background: var(--gray-color-2);
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  .header-center {
    width: min(100%, var(--max-width));
    margin-inline: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const Nav = styled.nav`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }

  ul {
    display: inline-flex;
    gap: 2.5rem;

    a {
      display: inline-block;
      font-size: var(--fs-500);
      padding: 0.2rem;
      border-bottom: 0.3rem solid transparent;
    }

    .active {
      border-bottom-color: var(--black-color);
    }
  }
`;

const Cart = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <div className="header-center">
        <Link to="/">
          <h1>ShopZee</h1>
        </Link>
        <Nav>
          <ul>
            {links.map(({ id, url, text }) => (
              <li key={id}>
                <NavLink
                  to={url}
                  className={({ isActive }) => (isActive ? "active" : null)}
                >
                  {text}
                </NavLink>
              </li>
            ))}
          </ul>
        </Nav>
        <Cart>
          <FaShoppingCartStyled />
        </Cart>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
