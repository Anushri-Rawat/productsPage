import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  background: var(--gray-color-2);
  height: var(--footer-height);
  padding: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const FooterText = styled.p`
  text-align: center;
  font-size: var(--fs-500);
  color: var(--gray-color-1);

  a {
    color: #777;
    font-size: var(--fs-500);
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterText>
        &copy;{new Date().getFullYear()} by
        <a href="https://github.com/Anushri-Rawat/productsPage"> ShopZee</a>,
        All rights reserved
      </FooterText>
    </FooterWrapper>
  );
};

export default Footer;
