import React from 'react';
import { config } from '../globals';

export const Header: React.FC = () => (
  <div
    style={{
      top: 0,
      width: '100%',
      height: '50px',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: config.accentColor,
      padding: '30px',
      fontSize: '12pt',
    }}
  >
    <a href="/" style={{ textDecoration: 'none' }}>
      <p style={{ color: 'white' }}>{config.siteName}</p>
    </a>
    <div style={{ flex: 1 }} />
    <a href="https://github.com/vriad/devii" style={{ textDecoration: 'none' }}>
      <p style={{ padding: '0px 1em', color: 'white' }}>GitHub</p>
    </a>
    <a
      href="https://devii.dev/blog/the-ultimate-tech-stack/"
      style={{ textDecoration: 'none' }}
    >
      <p style={{ padding: '0px 1em', color: 'white' }}>Motivation</p>
    </a>
  </div>
);
