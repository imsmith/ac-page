import React, { useState } from 'react';
import Image from './Image';
import f5Logo from '../public/image/f5/logo.png';
import cx from 'classnames';
import Link from 'next/link';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Members', href: '/members' },
  { name: 'Blog', href: '/posts' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow dark:bg-slate-800 fixed w-full top-0 z-50">
      <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <Link href="/" passHref>
            <div className="flex items-center cursor-pointer select-none">
              <div className="w-10 mr-2">
                <Image alt="logo" src={f5Logo} layout="responsive" />
              </div>
              <p className="text-slate-700 dark:text-slate-200 w-20 leading-4 text-base font-semibold pointer-events-none">
                Office of the CTO
              </p>
            </div>
          </Link>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-slate-500 dark:text-slate-200 hover:text-slate-600 dark:hover:text-slate-400 focus:outline-none focus:text-slate-600 dark:focus:text-slate-400"
              aria-label="toggle menu"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
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
          <div className="flex flex-col md:flex-row md:ml-6">
            {navigation.map((link) => (
              <Link key={link.name} href={link.href}>
                <a
                  className="
                my-1 text-sm font-medium text-slate-700 transition-colors duration-200 transform dark:text-slate-200 hover:text-primary-500 dark:hover:text-primary-400 md:mx-4 md:my-0"
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
