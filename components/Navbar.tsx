import React, { useState } from 'react';
import Image from './Image';
import octoLogo from '../public/image/f5/octologo.png';
import cx from 'classnames';

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Members', href: '/members', current: false },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow dark:bg-slate-800 fixed w-full top-0 z-50">
      <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <Image alt="logo" src={octoLogo} width={128} height={38} />

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
              <a
                key={link.name}
                className="
                 my-1 text-sm font-medium text-slate-700 transition-colors duration-200 transform dark:text-slate-200 hover:text-primary-500 dark:hover:text-primary-400 md:mx-4 md:my-0"
                href={link.href}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
