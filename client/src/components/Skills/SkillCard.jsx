'use client';
import React from 'react';


export default function SkillCard({ title, description, category,level }) {
  return (
    <div className='bg-purple-500 text-white border-4 rounded-xl border-black m-4 p-6 flex flex-col gap-8 items-center hover:bg-purple-800'>
      <div>
        <h2 className='text-3xl'>{title}</h2>
      </div>
      <div>
        <h5 className='text-muted text-lg'>Descripcion: {description}</h5>
      </div>
      <div>
        <h5 className='text-muted text-lg'>Categoria: {category}</h5>
      </div>
      <div>
        <h5 className="text-muted text-lg">Nivel: {level} </h5>
      </div>
    </div>
  );
}
