import React, { ReactElement } from 'react';
import Navigation from 'components/Navigation';
import Head from 'next/head';

interface LayoutProps {
  children: ReactElement;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Kevin Waelkens</title>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/public/images/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/public/images/favicon/favicon-16x16.png"
        />
        <link
          rel="mask-icon"
          href="/public/images/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/public/images/favicon/favicon.ico" />
      </Head>
      <Navigation />
      {children}
    </div>
  );
};

export default Layout;
