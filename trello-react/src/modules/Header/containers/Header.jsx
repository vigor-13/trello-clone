import React from 'react';

import NavBar from './NavBar';
import UserNavBar from './UserNavBar';

export default function Header(props) {
  const { type } = props;

  return (
    <header className={type === 'home' ? 'fixed-top' : ''}>
      {type === 'home' ? <NavBar /> : <UserNavBar /> }
    </header>
  );
}
