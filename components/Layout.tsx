import Head from 'next/head';
import React from 'react';
import { Navbar, Footer } from '.';
import { AppConfig } from '../utils/AppConfig';

type Props = { children: React.ReactNode };

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="absolute inset-0">
      <Head>
        <title>{AppConfig.title}</title>
        <link rel="icon" href="/image/favicon.ico" />
      </Head>
      <Navbar />
      <div className="flex h-full flex-col pt-[69px]">
        <main className="flex flex-1 flex-col bg-white dark:bg-slate-900">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
