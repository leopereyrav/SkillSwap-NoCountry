'use client';

import SideBar from '@/components/HomePage/SideBar';
import FullProfileCard from '@/components/UserProfile/FullProfileCard';
import { BACKEND_URL_BASE } from '@/config';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';

export default function Page({ params }) {
  const [user, setUser] = useState({});

  const { userid } = params;
  useEffect(() => {
    async function getUserData() {
      const request = await fetch(`${BACKEND_URL_BASE}/users/${userid}`);
      const response = await request.json();
      setUser(response?.user?.at(0));
    }

    getUserData();
  }, [userid]);

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
        <FullProfileCard user={user} instructor_id={userid} />
      </div>
    </main>
  );
}
