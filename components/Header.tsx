import React from 'react';
import { styled } from 'styled-components';
import Link  from 'next/link'
import Image from 'next/image'
import sabioLogo from '../public/img/sabio-white-logo.svg';
import { globals } from '../globals';

const HeaderBar = styled.nav`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 3rem;
  background: ${globals.colours.black};
  font-size: 1.2rem;
  font-weight: 600;
  width: 100%;
  height: 70px;

  @media screen and (max-width: 700px) {
    padding: 16px;
  }

  @media screen and (max-width: 375px) {
    padding: 5px;
  }
`;

const NavItems = styled.ul`
  display: flex;
  height: 70px;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin: 0 0.5rem;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  & a {
    color: white;
    text-decoration: none;
  }
  &:hover {
    a {
      text-decoration: underline;
    }
  }

  @media screen and (max-width: 400px) {
    font-size: 1rem;
    // margin: 0 0.45rem;
  }
`;

export const Header: React.FC = () => (
  <HeaderBar role='navigation'>
      <Link href='/' style={{ height: '35px' }}>
          <Image src={sabioLogo} width='50' alt='SabioLog Logo' />
      </Link>
      <NavItems>
      <div className="flex-spacer" />
      <NavItem>
        <Link href='/about'>
          About
        </Link>
      </NavItem>
      <NavItem>
        <Link href='/blog'>
          Blog
        </Link>
      </NavItem>
      <NavItem>
        <Link href='/contact'>
          Contact
        </Link>
      </NavItem>
      <NavItem>
        <Link href="https://github.com/michael-sage">
          GitHub
        </Link>
      </NavItem>
    </NavItems>
  </HeaderBar>
);
