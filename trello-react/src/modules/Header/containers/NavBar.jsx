import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(0,121,191,0);
  padding: 1rem;

  &.auth-buttons {
    display: flex;
    align-items: center;
  }
`;
const H1 = styled.h1`
  color: #fff;
`;
const Button = styled(Link)`
  margin-left: 1rem;
  font-weight: bold;
  padding: 7px;
  border: 2px solid #fff;
  border-radius: ${(props) => props.theme.mainBorderRadius};
  background-color: ${(props) => (props.isSignup ? '#fff' : '')};
  color: ${(props) => (props.isSignup ? props.theme.mainThemeColor : '#fff')};
  line-height: 1;

  &:hover {
    color: ${(props) => (props.isSignup ? props.theme.mainThemeColor : '#fff')};
  }
`;

export default function NavBar() {
  return (
    <Nav>
      <H1>Trello</H1>
      <div className="auth-buttons">
        <Button to="/signin">Sign In</Button>
        <Button isSignup to="/signup">Sign Up</Button>
      </div>
    </Nav>
  );
}
