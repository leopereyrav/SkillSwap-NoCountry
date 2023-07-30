'use client';

import SideBar from '@/components/HomePage/SideBar';
import UserProfileCard from '@/components/UserProfile/UserProfileCard';
import { BACKEND_URL_BASE } from '@/config';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useSelector } from 'react-redux';

export default function UserProfile() {
  const { user } = useSelector((state) => state.user);
  const [data, setData] = useState({});

  useEffect(() => {
    if (user.id) {
      fetch(`${BACKEND_URL_BASE}/users/${user.id}`)
        .then((res) => res.json())
        .then((response) => setData(response.user[0]));
    }
  }, []);
  return (
    <main className='min-h-screen flex flex-row bg-white font-semibold'>
      <div className='bg-purpleThirty mx-auto flex-shrink-0 pt-10 shadow-xl'>
        <SideBar show={'profile'} />
      </div>
      <div className='mx-auto flex-grow pt-10 px-10 md:px-12 lg:px-16'>
        <div className='flex flex-row items-center justify-start mb-4'>
          <Link href={'/home'} className='text-lg mb-6'>
            <FaArrowLeft className='inline-flex mr-1' />
            <span>Atras</span>
          </Link>
        </div>
        <UserProfileCard user={data} />
      </div>
    </main>
  );
}
