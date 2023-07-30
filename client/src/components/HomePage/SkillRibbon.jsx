import Link from 'next/link';
import React from 'react';

export default function SkillRibbon({ data }) {
  return (
    <>
      {data.map((d, index) => (
        <div key={index}>
          <Link href={d.link}>
            <button
              className='bg-purpleSecondary text-white h-14 rounded-md px-14 w-48'
              type='button'
            >
              {d.title}
            </button>
          </Link>
        </div>
      ))}
    </>
  );
}
