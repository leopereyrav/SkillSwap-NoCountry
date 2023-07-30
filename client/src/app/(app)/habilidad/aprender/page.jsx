'use client';

import { TbPointFilled } from 'react-icons/tb';
import Link from 'next/link';
import ListButtonSkills from '@/components/Skills/ListButtonSkills';

const LernSkils = () => {
  let skills = ['Idiomas', 'tecnología', 'Artes', 'Cocina', 'Yoga', 'Otros'];
  let path = 'aprender';

  return (
    <div className='h-full w-full px-6 py-4 flex flex-col justify-center '>
      <h1 className='text-4xl text-center mt-5'>bienvenid@ a SkillSwap</h1>
      <p className='text-lg my-5'>Antes de continuar cuentanos...</p>
      <h2 className='text-md'>
        ¿Cual es tu area de{' '}
        <span className='font-bold text-[1.5rem]'> aprender </span> ?
      </h2>
      <div class='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 px-6 py-4'>
        {skills.map((button, key) => {
          return (
            <div key={key}>
              <ListButtonSkills option={button} pathname={path} />
            </div>
          );
        })}
      </div>
      <div className='flex justify-center items-center'>
        <span className='cursor-pointer'>
          <Link href={'/habilidad/ensenar'}>
            <TbPointFilled />
          </Link>
        </span>

        <span className='cursor-pointer'>
          <Link href={'/habilidad/aprender'}>
            <TbPointFilled />
          </Link>
        </span>

        <span className='cursor-pointer'>
          <Link href={'/habilidad/otros'}>
            <TbPointFilled />
          </Link>
        </span>
      </div>
    </div>
  );
};

export default LernSkils;
