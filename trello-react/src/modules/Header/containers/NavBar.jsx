import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { UserContext } from '../../../stores';
import { LinkButton } from '../../TrelloStyle';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(0,121,191,0);
  padding: 1rem;

  & .auth-buttons {
    display: flex;
    align-items: center;
  }
`;
const H1 = styled.h1`
  color: #fff;
  transition: all 0.2s;
  :hover {
    transform: scale(1.2);
  }
`;

export default function NavBar() {
  const user = useContext(UserContext);

  return (
    <Nav>
      <H1>
        <Link to="/">Trello</Link>
      </H1>
      {user.isSignin() ? (
        <div>
          <LinkButton color="white" ftColor="main" to="/boards">Go to Your Boards</LinkButton>
        </div>
      ) : (
        <div className="auth-buttons">
          <LinkButton color="white" ftColor="main" outline to="/signin">Sign In</LinkButton>
          <LinkButton color="white" ftColor="main" isSignup to="/signup">Sign Up</LinkButton>
        </div>
      )}
    </Nav>
  );
}
