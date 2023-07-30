'use client';

import { useSelector } from 'react-redux';
import { TbPointFilled } from 'react-icons/tb';
import TextField from '@/components/TextField';
import Link from 'next/link';

const OthersSkills = () => {
  const currentUser = useSelector((state) => state.user);

  return (
    <div className='h-full'>
      <h1 className='text-4xl text-center mt-5'>
        ¡{currentUser.user.username}, bienvenida a SkillSwap!
      </h1>
      <div className='flex h-[85%] justify-center items-center'>
        <div className='bg-yellowButtonDisable w-full sm:w-1/2 p-5'>
          <h2 className='text-xl'>Seleccionaste: Otros</h2>
          <form className='space-y-5 mt-10'>
            <div className='flex items-center justify-between space-x-5'>
              <label className='text-lg' htmlFor='habilidad'>
                Habilidad
              </label>
              <TextField
                name='habilidad'
                placeholder='habilidad'
                id={'habilidad'}
                customClassNames='w-72'
              />
            </div>
            <div className='flex items-center justify-between space-x-5'>
              <label className='text-lg' htmlFor='descripcion'>
                Descripción
              </label>
              <TextField
                name='descripcion'
                placeholder='descripcion'
                id={'descripcion'}
                customClassNames='w-72'
              />
            </div>
            <div className='flex items-center justify-between space-x-5'>
              <label className='text-lg' htmlFor='nivel'>
                Nivel
              </label>
              <select className='px-5 py-3.5 bg-white' name='nivel' id='nivel'>
                <option value='principiante'>Principiante</option>
                <option value='intermedio'>Intermedio</option>
                <option value='avanzado'>Avanzado</option>
              </select>
            </div>
          </form>
        </div>
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

export default OthersSkills;
