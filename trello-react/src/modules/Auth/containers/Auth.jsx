import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import SigninForm from './AuthForm';

const AuthWrapper = styled.div`
  max-width: 400px;
  width: 100%;
  margin: 0 auto;

  & > h1 {
    text-align: center;
    color: ${(props) => props.theme.palette.main};
    font-weight: bold;
    width: 100%;
    margin: 40px 0;
  }
`;
const AuthBody = styled.div`
  padding: 25px 40px;
  box-shadow: rgba(0,0,0,0.1) 0 0 10px;
  border-radius: 4px;

  & > h2 {
    text-align: center;
    color: #5E6C84;
    font-size: 16px;
    margin-top: 10px;
    margin-bottom: 25px;
  }
`;
const StyledLink = styled(Link)`
  color: ${(props) => props.theme.palette.anchor};
  display: block;
  text-align: center;
  margin-top: 20px;
  font-size: 14px;

  &:hover {
    color: ${(props) => props.theme.palette.anchor};
    text-decoration: underline;
  }
`;

const Auth = ({ type }) => (
  <AuthWrapper>
    <h1>Trello</h1>
    <AuthBody>
      <h2>{type === 'signin' ? 'Login to Trello' : 'Sign up for your account'}</h2>
      <SigninForm type={type} />
      {type === 'signin' ? (
        <StyledLink to="/signup">Sign up for an account</StyledLink>
      ) : (
        <StyledLink to="/signin">Already have an account? Sign in</StyledLink>
      )}
    </AuthBody>
  </AuthWrapper>
);

export default Auth;
