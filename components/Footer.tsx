import React from 'react';
import { config } from '../globals';

export const Footer: React.FC = () => (
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
      color: 'white',
      padding: '30px',
      fontSize: '12pt',
    }}
  >
    <p>{`© ${config.yourName} ${new Date().getFullYear()}`}</p>
    <p><a href="https://github.com/vriad/devii">Blog template</a></p>
    <a href="/rss.xml">
      <img
        src="/rss-white.svg"
        alt="RSS Feed"
        height="30"
        width="30"
      />
    </a>
  </div>
);
