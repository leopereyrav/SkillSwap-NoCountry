'use client';
import Link from 'next/link';
import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { MdAddAPhoto } from 'react-icons/md';

export default function EditModal({ modalState }) {
  return (
    <div className='min-h-3/4 fixed top-14 bg-white z-30 w-1/2 rounded-lg mx-auto shadow-md shadow-purpleSecondary'>
      <div className='flex flex-row items-start justify-between py-20 px-10 gap-12'>
        <div className='flex-shrink'>
          <div className='p-4 bg-purpleSecondary rounded-full'>
            <MdAddAPhoto className='text-white w-8 h-8'>
              <input type="file" name="" id="" />
            </MdAddAPhoto>
          </div>
          {/* <input type="file" name="ALGO" id="" /> */}
        </div>
        <div className='flex-grow w-full'>
          <div className='flex flex-col w-full items-center justify-start gap-8'>
            <form action='' method='post' className='w-full'>
              <div className='flex flex-col mx-auto gap-6 w-3/4'>
                <label>
                  Nombre
                  <input
                    type='text'
                    id='nombre'
                    className='border-b-2 border-purple-500 w-full'
                  />
                </label>
                <label>
                  Apellido
                  <input
                    type='text'
                    id='apellido'
                    className='border-b-2 border-purple-500 w-full'
                  />
                </label>
                <label>
                  Ubicación
                  <input
                    type='text'
                    id='ubicacion'
                    className='border-b-2 border-purple-500 w-full'
                  />
                </label>
              </div>
              <div className='bg-purpleThirty flex flex-col rounded-lg gap-6 p-8 my-8 mx-auto w-10/12'>
                <label>
                  Area de expertiz
                  <input
                    type='text'
                    className='bg-purpleSecondary text-white rounded-lg block'
                  />
                </label>
                <label>
                  Habilidad
                  <input
                    type='text'
                    className='bg-purpleSecondary text-white rounded-lg block'
                  />
                </label>
                <label>
                  Nivel
                  <select
                    name='Nivel'
                    id='nivel'
                    className='block w-3/4 rounded-xl p-2'
                  >
                    <option value='Medium'>Medio</option>
                    <option value='High'>Alto</option>
                    <option value='Advanced'>Avanzado</option>
                  </select>
                </label>
                <label>
                  Describe tu experiencia con esta habilidad
                  <textarea
                    placeholder='Menciona lo que creas reelevante...'
                    id='descripcion'
                    className='block w-full border-b-2 border-purpleSecondary'
                  ></textarea>
                </label>
              </div>
              <div className='w-3/4 mx-auto'>
                <input
                  type='submit'
                  value='Guardar'
                  className='bg-yellowPrimary p-2 rounded-full w-full cursor-pointer'
                />
              </div>
            </form>
          </div>
        </div>
        <Link href={'#'}>
          <AiOutlineClose
            className='text-purplePrimary absolute top-10 right-16'
            onClick={modalState}
          />
        </Link>
      </div>
    </div>
  );
}
