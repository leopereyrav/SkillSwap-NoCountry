'use client';

import React, { useEffect, useState } from 'react';
import SideBar from '@/components/HomePage/SideBar';
// import SkillRibbon from '@/components/HomePage/SkillRibbon';
import ProfileCard from '@/components/HomePage/ProfileCard';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

export default function SearchPage() {
  const [usersData, setUserData] = useState([]);
  useEffect(() => {
    async function getSearchUserData() {
      const request = await fetch(
        'https://skillswap.onrender.com/api/v1/users?page=1&limit=15'
      );
      const response = await request.json();
      setUserData(response.users);
    }
    getSearchUserData();
  }, []);

  return (
    <main className='min-h-screen flex flex-row  bg-white font-semibold'>
      <div className='bg-purpleThirty mx-auto flex-shrink-0  pt-10 shadow-xl'>
        <SideBar show={'filter'} />
      </div>

      <div className='mx-auto flex-grow pt-10 pb-12 px-10 md:px-20 lg:px-28'>
        <div className='flex flex-col items-center justify-center gap-16'>
          <div className='w-full'>
            <div className='flex flex-row items-center justify-start'>
              <Link href={'/home'} className='text-lg mb-6'>
                <FaArrowLeft className='inline-flex mr-1' />
                <span>Atras</span>
              </Link>
            </div>
            <div className='flex flex-col gap-10 items-start justify-center'>
              {usersData.map((user) => {
                return (
                  <ProfileCard
                    key={user.id}
                    profileData={user}
                    isSingle={false}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
