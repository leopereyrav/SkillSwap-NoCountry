'use client';
import { React, useRef, useState } from 'react';
import Link from 'next/link';
import { FaBell, FaUser, FaSearch } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import useClickOutside from '@/hooks/useClickOutside';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const currentUser = useSelector((state) => state.user);
  const user = currentUser.user;
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const router = useRouter();
  const dropdownRef = useRef(null);

  const handleDropDownClick = () => {
    setDropdownIsOpen(!dropdownIsOpen);
  };

  useClickOutside(dropdownRef, handleDropDownClick);
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    router.push('/home/search');
  };

  return (
    <nav className='bg-purpleSecondary shadow sticky top-0 z-10'>
      <div className='max-w-screen-xl flex flex-row flex-wrap items-center justify-between mx-auto pt-4 px-4'>
        <div className='flex items-center space-x-4'>
          <Image
            src='/images/logo.svg'
            alt='skill swap logo'
            width={50}
            height={50}
          />
          <Link href={'/'}>
            <span className='text-2xl font-bold text-yellowPrimary hover:font-bold'>
              SKILL SWAP
            </span>
          </Link>
        </div>

        {currentUser.status === 'authenticated' ? (
          <>
            <div className='hidden md:flex items-center justify-between space-x-4 '>
              <Link href={'#'}>
                <FaBell className='text-yellowPrimary' />
              </Link>
              <button onClick={handleDropDownClick}>
                <FaUser className='text-yellowPrimary' />
              </button>
              <div className='absolute'>
                {dropdownIsOpen && (
                  <div
                    ref={dropdownRef}
                    id='dropdown'
                    class='z-10 top-16 -left-36 relative bg-purple-50 divide-y text-black divide-gray-700 rounded-lg shadow w-44'
                  >
                    <div class='px-4 py-3 text-sm'>
                      <p class='truncate'>{user?.first_name}</p>
                      <p title={user?.email} class='font-medium truncate'>
                        {user?.email}
                      </p>
                    </div>

                    <div class='py-1'>
                      <a
                        href='/logout'
                        class='block px-4 py-2 text-sm hover:bg-purple-100'
                      >
                        Cerrar sesión
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className='-mr-2 flex md:hidden'>
              <button
                onClick={() => setIsOpen(!isOpen)}
                type='button'
                className='bg-yellowPrimary inline-flex items-center justify-center p-2 rounded-md text-purpleSecondary hover:text-white focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-offset-gray-800 focus:ring-yellowPrimary'
                aria-controls='mobile-menu'
                aria-expanded={isOpen}
              >
                <span className='sr-only'>Open main menu</span>
                <svg
                  className={`block h-6 w-6 ${isOpen ? 'hidden' : 'block'}`}
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
                <svg
                  className={`block h-6 w-6 ${isOpen ? 'block' : 'hidden'}`}
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>
          </>
        ) : (
          <div className='space-x-7'>
            <Link
              className='bg-yellowPrimary py-3 px-10 rounded-3xl text-black'
              href={'/login'}
            >
              Login
            </Link>
            <Link
              className='bg-yellowPrimary py-3 px-10 rounded-3xl text-black'
              href={'/register'}
            >
              Registro
            </Link>
          </div>
        )}
      </div>
      {isOpen && (
        <div
          className='md:hidden flex flex-col items-center justify-center gap-5'
          id='mobile-menu'
        >
          <div className='w-full flex flex-row justify-center'>
            <input
              type='text'
              value={searchTerm}
              onChange={handleInputChange}
              placeholder='Search...'
              className='py-2 px-4 rounded-l-md focus:outline-none shadow-lg bg-white text-purpleSecondary text-sm focus:ring-yellowPrimary  pl-10 p-2.5 placeholder-purpleSecondary'
            />
            <button
              onClick={handleSearch}
              className='bg-white text-black py-2 px-4 rounded-r-md h-10'
            >
              <FaSearch />
            </button>
          </div>
          <div className='px-2 pt-2 pb-3 space-y-2 sm:px-3 flex flex-col items-center gap-2'>
            <Link href={'#'} className='text-purplePrimary'>
              <FaBell className='text-yellowPrimary' />
            </Link>
            <button
              onClick={handleDropDownClick}
              className='text-yellowPrimary'
            >
              <FaUser />
            </button>
          </div>
        </div>
      )}
      <div className='flex flex-col items-center justify-center bg-purpleSecondary py-6'>
        {currentUser.status == 'authenticated' && (
          <div
            className={
              'hidden md:flex items-center flex-col w-2/4 xl:max-w-2xl'
            }
          >
            <div className='flex justify-start w-full'>
              <label
                htmlFor='search'
                className='mb-2 text-left text-lg text-yellowPrimary'
              >
                ¿Qué buscas aprender?
              </label>
            </div>
            <div className='flex w-full'>
              <input
                id='search'
                type='text'
                value={searchTerm}
                onChange={handleInputChange}
                placeholder='¿Que buscas aprender?...'
                className='py-2 px-4 rounded-l-full focus:outline-none text-purpleSecondary pl-10 p-2.5 placeholder-gray-100 w-full'
              />
              <button
                onClick={handleSearch}
                className='bg-white text-black py-2 px-4 rounded-r-full h-10'
              >
                <FaSearch />
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
