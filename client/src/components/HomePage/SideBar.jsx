'use client';
import Link from 'next/link';
import { React, useState } from 'react';
import { FaChalkboardTeacher, FaGlasses, FaStar, FaUser } from 'react-icons/fa';
import { IoSettingsSharp } from 'react-icons/io5';
export default function SideBar({ show }) {
  const [nivel, setNivel] = useState('');
  const [valoracion, setValoracion] = useState('');

  const handleNivelChange = (e) => {
    setNivel(e.target.value);
  };

  const handleValoracionChange = (e) => {
    setValoracion(e.target.value);
  };

  if (show === 'home') {
    // Se renderiza Sidebar de home page
    return (
      <div className='flex flex-col items-center md:items-start mx-6 md:mx-4'>
        <Link
          href='/profile'
          className='flex items-center justify-start gap-4 mb-6'
        >
          <FaUser />
          <p className='hidden md:inline'>Mi perfil</p>
        </Link>
        <Link href='/meeting/learn' className='flex items-center gap-4 mb-6'>
          <FaGlasses />
          <p className='hidden md:inline'>Solicitudes de aprendizaje</p>
        </Link>
        <Link href='/meeting/teach' className='flex items-center gap-4'>
          <FaChalkboardTeacher />
          <p className='hidden md:inline'>Solicitudes de enseñanza</p>
        </Link>
      </div>
    );
  } else if (show === 'filter') {
    // Se renderiza Sidebar para filtrar
    return (
      <div className='flex flex-col items-start justify-center mx-4 md:mx-6 lg:mx-8 gap-4'>
        <h2 className='mb-10 text-lg font-bold'>Resultados de busqueda </h2>
        <div>
          <h2 className='font-bold text-md'>Area</h2>
          <h5 className='mx-auto font-normal text-sm'>English</h5>
        </div>
        <div>
          <h2 className='font-bold text-md'>Filtrar por</h2>
          <div className='flex flex-col gap-6 items-center mt-4'>
            <select
              id='nivel'
              value={nivel}
              className='w-52 h-12 py-2 px-4 rounded-sm'
              onChange={handleNivelChange}
            >
              <option value=''>Nivel</option>
              <option value='principiante'>Principiante</option>
              <option value='medio'>Medio</option>
              <option value='experimentado'>Experimentado</option>
            </select>

            <select
              id='valoracion'
              value={valoracion}
              className='w-52 h-12 py-2 px-4 rounded-sm'
              onChange={handleValoracionChange}
            >
              <option value=''>Valoracion</option>
              <option value='alta'>Valoración más alta</option>
              <option value='baja'>Valoración más baja</option>
            </select>
          </div>
          <button
            className='underline opacity-50 hover:opacity-100 mt-10'
            onClick={() => console.log('limpiando...')}
          >
            Limpiar filtros
          </button>
        </div>
      </div>
    );
  } else if (show === 'profile') {
    // Se renderizara Sidebar de Perfil de usuario
    return (
      <div className='flex flex-col items-center md:items-start justify-center gap-4 md:mx-4 mx-6'>
        <h2 className='mb-10 text-lg font-bold mx-auto'>Perfil</h2>
        <div className='flex flex-col gap-6'>
          <Link href='/' className='flex items-center justify-start gap-4'>
            <FaUser />
            <p className='hidden md:inline'>Informacion de perfil</p>
          </Link>
          <Link href='/' className='flex items-center justify-start gap-4'>
            <FaStar />
            <p className='hidden md:inline'>Mis valoraciones</p>
          </Link>
          <Link href='/' className='flex items-center justify-start gap-4'>
            <IoSettingsSharp />
            <p className='hidden md:inline'>Configuracion</p>
          </Link>
        </div>
      </div>
    );
  }
}
