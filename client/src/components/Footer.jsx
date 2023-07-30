import React from 'react';
import Image from 'next/image';
import { koulen, montserrat } from '../app/styles/fonts';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='bg-purpleSecondary shadow'>
      <div className='max-w-full flex flex-col items-center gap-6 py-10 text-yellowPrimary font-semibold md:flex-row md:justify-between md:px-16'>
        <div className='flex flex-row items-center'>
          <Image
            src='/images/logo.svg'
            alt='skill swap logo'
            width={50}
            height={50}
          />
          <Link href={'/'}>
            <span className={`${koulen.className} text-3xl ml-1`}>
              SKILL SWAP
            </span>
          </Link>
        </div>
        <div>
          <p className={`${montserrat.className}`}>
            Todos los derechos reservados ©
          </p>
        </div>
        <div>
          <p className={`${montserrat.className}`}>2023</p>
        </div>
      </div>
    </footer>
  );
}
