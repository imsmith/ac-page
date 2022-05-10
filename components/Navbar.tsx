import React, { useState } from 'react';
import Image from './Image';
import f5Logo from '../public/image/f5/logo.png';
import cx from 'classnames';
import Link from 'next/link';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Members', href: '/members' },
  { name: 'Blog', href: '/posts' }
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-white shadow dark:bg-slate-800">
      <div className="container mx-auto px-6 py-4 md:flex md:items-center md:justify-between">
        <div className="flex items-center justify-between">
          <Link href="/" passHref>
            <div className="flex cursor-pointer select-none items-center">
              <div className="mr-2 w-10">
                <Image alt="logo" src={f5Logo} layout="responsive" />
              </div>
              <p className="pointer-events-none w-20 text-base font-semibold leading-4 text-slate-700 dark:text-slate-200">
                Office of the CTO
              </p>
            </div>
          </Link>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-slate-500 hover:text-slate-600 focus:text-slate-600 focus:outline-none dark:text-slate-200 dark:hover:text-slate-400 dark:focus:text-slate-400"
              aria-label="toggle menu"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu open: "block", Menu closed: "hidden" */}
        <div className={cx('items-center md:flex', { hidden: !isOpen })}>
          <div className="flex flex-col md:ml-6 md:flex-row">
            {navigation.map((link) => (
              <Link key={link.name} href={link.href}>
                <a
                  onClick={() => setIsOpen(false)}
                  className="
                my-1 transform text-sm font-medium text-slate-700 transition-colors duration-200 hover:text-primary-500 dark:text-slate-200 dark:hover:text-primary-400 md:mx-4 md:my-0"
                >
                  {link.name}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
