import React from 'react';
import styled from 'styled-components';
import { Button } from '../../TrelloStyle';

const StyledInput = styled.input`
  width: 100%;
  border-radius: 4px;
  height: 44px;
  background-color: #FAFBFC;
  padding: .5em;
  border: 2px solid #DFE1E6;
  margin-bottom: 20px;
`;

export default function AuthForm({ type }) {
  console.log(type);

  const buildForm = () => {
    if (type !== 'signin') {
      return (
        <>
          <StyledInput type="text" placeholder="Enter email address" />
          <StyledInput type="text" placeholder="Enter full name" />
          <StyledInput type="password" placeholder="Create password" />
        </>
      );
    }

    return (
      <>
        <StyledInput type="text" placeholder="Enter email" />
        <StyledInput type="password" placeholder="Enter password" />
      </>
    );
  };

  return (
    <form>
      {buildForm()}
      <Button
        color={type === 'signin' ? 'green' : 'blue'}
        size="medium"
        fullWidth
      >
        {type === 'signin' ? 'Sign in' : 'Sign up'}
      </Button>
    </form>
  );
}
