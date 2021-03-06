import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BrandContainer = styled.div``;
const BrandText = styled.h3`
  font-size: 1.3em;
  color: ${props => props.theme.navbar.brandColor};
  margin-left: 10px;
  a {
    color: white;
    text-decoration: none;
  }
`;

const NavbarBrand = ({ children }: { children: any }) => (
  <BrandContainer>
    <BrandText>
      <Link to="/">{children}</Link>
    </BrandText>
  </BrandContainer>
);

export default NavbarBrand;
