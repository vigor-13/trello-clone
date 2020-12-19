import React from 'react';

import NavBar from './NavBar';
import UserNavBar from './UserNavBar';

export default function Header(props) {
  const { isLoggedIn } = props;

  return (
    <header className={isLoggedIn ? '' : 'fixed-top'}>
      {isLoggedIn ? <UserNavBar /> : <NavBar /> }
    </header>
  );
}
