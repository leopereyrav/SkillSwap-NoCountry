'use client';
import { React, useRef, useState } from 'react';
import Link from 'next/link';
import { FaBell, FaUser } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import useClickOutside from '@/hooks/useClickOutside';

export default function Navbar() {
  const currentUser = useSelector((state) => state.user);
  const user = currentUser.user;
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);

  const dropdownRef = useRef(null);

  const handleDropDownClick = () => {
    setDropdownIsOpen(!dropdownIsOpen);
  };

  useClickOutside(dropdownRef, handleDropDownClick);

  return (
    <nav className='bg-purpleSecondary shadow sticky top-0 z-10 pb-4'>
      <div className='max-w-screen-xl flex flex-row flex-wrap items-center justify-between mx-auto pt-4 px-4'>
        <div className='flex items-center space-x-4'>
          <Image
            src='/images/logo.png'
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
    </nav>
  );
}
