import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BiHomeAlt } from 'react-icons/bi';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import { UserContext } from '../../../stores';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 40px;
  padding: 4px;
  overflow: hidden;
  background-color: ${(props) => props.theme.palette.main};

  & .logo {
    font-size: 20px;
    color: #fff;
    font-weight: bold;
    opacity: .5;

    &:hover {
      opacity: .8;
    }
  }
`;
const SquareWrapper = styled.div`
  & > * {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: rgba(255, 255, 255, .5);
    color: #fff;
    font-size: 22px;
    padding: 4px;
    border-radius: 3px;

    &:hover {
      background-color: rgba(255, 255, 255, .3);
      color: #fff;
    }
  };
`;
const UserAvatar = styled.div`
  border-radius: 3px;
  width: 30px;
  height: 30px;
  overflow: hidden;

  & > img {
    display: inline-block;
    width: 100%;
  }
`;

const UserNavBar = observer(() => {
  const user = useContext(UserContext);

  return (
    <Nav>
      <div>
        <SquareWrapper>
          <Link to="/boards"><BiHomeAlt /></Link>
        </SquareWrapper>
      </div>
      <div className="logo">
        <Link to="/boards">Trello</Link>
      </div>
      <div>
        <UserAvatar>
          <img src={user.userInfo.imagePath} alt="" />
        </UserAvatar>
      </div>
    </Nav>
  );
});

export default UserNavBar;
