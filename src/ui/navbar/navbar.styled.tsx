import React from "react";
import styled from "styled-components";
const navbar = styled.nav`
  display: flex;
  flex: row;
  justify-content: space-between;
  align-items: center;
  min-height: 48px;
  background-color: ${props => props.theme.navbar.backgroundColor};
`;
export default navbar;
