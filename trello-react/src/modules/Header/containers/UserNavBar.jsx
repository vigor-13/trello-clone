import React from 'react';
import { Link } from 'react-router-dom';
import { BiHomeAlt } from 'react-icons/bi';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  max-height: 40px;
  padding: 4px;
  overflow: hidden;
  background-color: ${(props) => props.theme.mainThemeColor}
`;
const SquareWrapper = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: rgba(255, 255, 255, .5);
  color: #fff;
  font-size: 22px;
  padding: 4px;
  border-radius: ${(props) => props.theme.mainBorderRadius};

  &:hover {
    background-color: rgba(255, 255, 255, .3);
    color: #fff;
  }
`;

export default function UserNavBar() {
  return (
    <Nav>
      <SquareWrapper to="/">
        <BiHomeAlt />
      </SquareWrapper>
    </Nav>
  );
}
