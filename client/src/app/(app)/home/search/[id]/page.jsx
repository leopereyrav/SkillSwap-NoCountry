import FullProfileCard from '@/components/UserProfile/FullProfileCard';
import Link from 'next/link';
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

export default function ExtendedProfile() {
  return (
    <div className='w-full'>
      <div className='flex flex-row gap-2 sm:gap-4 md:gap-6 lg:gap-10'>
        <div>
          <Link href={'/home/search'}>
            <FaArrowLeft className='inline mr-2' />
            <span className='text-xl font-bold'>Volver al listado</span>
          </Link>
        </div>
        <div className='flex flex-col gap-8'>
          <p className='text-lg'>Idiomas / Aleman</p>
          <FullProfileCard />
        </div>
      </div>
    </div>
  );
}
