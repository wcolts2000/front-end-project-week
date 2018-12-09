import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// ==============================
// ======   STYLED COMPS   ======
// ==============================

const Nav = styled.nav`
  width: 300px;
  position: fixed;
  height: 100vh;
  padding: 20px 15px;
  background: #d8d8d8;
  border-right: 1px solid #979797;

  @media (max-width: 650px) {
    width: 100%;
    height: auto;
    border-bottom: 1px solid #979797;
    border-right: none;
  }
`;

const H1 = styled.h1`
  color: #4a4a4a;
  display: block;
`;

const Span = styled.span`
  display: block;

  @media (max-width: 650px) {
    display: inline-block;
  }
`;

const StyledLink = styled(Link)`
  background: #2bc1c4;
  color: white;
  font-weight: bold;
  width: 85%;
  text-decoration: none;
  margin: 0 auto 10px;
  padding: 15px;
  text-align: center;
  cursor: pointer;
  border: 1px solid #979797;
  transition: all 0.3s ease-in-out;
  display: block;

  &:hover {
    background: white;
    color: #2bc1c4;
  }

  &:active {
    opacity: 0.5;
  }

  @media (max-width: 650px) {
    width: 70%;
  }
`;

// ==============================
// ======    COMPONENTS    ======
// ==============================

function NavSideBar() {
  return (
    <Nav>
      <H1>
        Lambda <Span>Notes</Span>
      </H1>
      <StyledLink to="/notes">View&nbsp;Your&nbsp;Notes</StyledLink>
      <StyledLink to="/note-add">+&nbsp;Create&nbsp;New&nbsp;Note</StyledLink>
    </Nav>
  );
}

export default NavSideBar;
