'use client';

import SkillRibbon from '@/components/HomePage/SkillRibbon';
import { skillsData } from '@/components/HomePage/SkillRibbonData';
import ProfileCard from '@/components/HomePage/ProfileCard';
import SideBar from '@/components/HomePage/SideBar';
import { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';

export default function HomePage() {
  const [suggestUser, setSuggestUser] = useState({});
  useEffect(() => {
    async function getRamdonUser() {
      const request = await fetch(
        'https://skillswap.onrender.com/api/v1/users?page=1&limit=15'
      );
      const data = await request.json();
      // number random of the users

      setSuggestUser(
        data?.users[Math.floor(Math.random() * data?.users?.length)]
      );
    }
    getRamdonUser();
  }, []);

  return (
    <main className='min-h-screen flex flex-row  bg-white font-semibold'>
      <div className='bg-purpleThirty mx-auto flex-shrink-0 pt-10 shadow-xl'>
        <SideBar show={'home'} />
      </div>

      <div className='mx-auto flex-grow pt-10 pl-20'>
        <div className='flex flex-col items-center justify-center gap-16'>
          <div className='w-full'>
            <h3 className='text-lg mb-6'>
              Ya que buscas aprender te sugerimos a:
            </h3>
            <ProfileCard profileData={suggestUser} isSingle={true} />
          </div>
          <div className='w-full mt-20'>
            <h3 className='text-lg mb-6'>Explora por area:</h3>
            <div className='flex flex-row gap-8 flex-wrap'>
              <SkillRibbon data={skillsData} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

{
  /* <h1>Hello! {currentUser.user.email}</h1> */
}
