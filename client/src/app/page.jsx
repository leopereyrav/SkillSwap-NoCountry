import React from 'react';
import { koulen, gothicSc, gothic } from './styles/fonts';
import Image from 'next/image';
import img from '../../public/images/landing.png';
import Button from '@/components/Button';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main className='min-h-screen bg-customPurple flex flex-col justify-around'>
        <div className='-z-50 absolute w-full h-screen'>
          <Image src={img} alt='landing' className='object-cover' />
        </div>
        <div className='flex flex-col pl-8'>
          <h1 className={`${koulen.className} text-yellowTitle text-9xl`}>
            SKILL SWAP
          </h1>
          <p
            className={`${gothicSc.className} leading-10 font-normal text-white text-4xl pt-4`}
          >
            CONECTANDO HABILIDADES, <br /> IMPULSANDO EL APRENDIZAJE <br />{' '}
            COLABORATIVO.
          </p>
        </div>
        <p
          className={`${gothic.className} self-end text-right leading-10 font-normal text-white text-4xl pr-8 pt-4`}
        >
          Esta plataforma te permite conectar con personas <br /> que poseen
          distintas habilidades, aprender de ellas, <br /> e intercambiar tus
          conocimientos, fomentando <br /> así el beneficio mutuo.
        </p>
      </main>
      <section className='flex flex-col justify-around bg-purpleThirty h-full'>
        <br />
        <h3
          className={`${koulen.className} text-purplePrimary text-center text-4xl p-4`}
        >
          ¡Intercambia conocimientos!
        </h3>
        <div className='flex justify-center flex-wrap'>
          <div className='relative h-96'>
            <h3 className='-left-8 top-5 absolute py-3 px-20 w-full text-3xl text-white bg-purplePrimary/75'>
              Idioma
            </h3>
            <Image
              src='/images/learn.png'
              alt='skills'
              className='h-full'
              height={500}
              width={300}
            />
          </div>

          <div className='relative h-96'>
            <h3 className='-left-8 top-5 absolute py-3 px-20 w-full text-3xl text-white bg-purplePrimary/75'>
              Tecnología
            </h3>
            <Image
              src='/images/tech.png'
              alt='skills'
              className='h-full'
              height={500}
              width={300}
            />
          </div>

          <div className='relative h-96'>
            <h3 className='-left-8 top-5 absolute py-3 px-20 w-full text-3xl text-white bg-purplePrimary/75'>
              Cocina
            </h3>
            <Image
              src='/images/eat.png'
              alt='skills'
              className='h-full'
              height={500}
              width={300}
            />
          </div>

          <div className='relative h-96'>
            <h3 className='-left-8 top-5 absolute py-3 px-20 w-full text-3xl text-white bg-purplePrimary/75'>
              Yoga
            </h3>
            <Image
              src='/images/yoga.png'
              alt='skills'
              className='h-full'
              height={500}
              width={300}
            />
          </div>
        </div>

        <div className='flex justify-center flex-wrap'>
          <div className='relative h-96'>
            <h3 className='-right-8 z-10 bottom-5 absolute py-3 px-20 w-full text-3xl text-white bg-purplePrimary/75'>
              Música
            </h3>
            <Image
              src='/images/music.png'
              alt='skills'
              className='h-full'
              height={500}
              width={300}
            />
          </div>

          <div className='relative h-96'>
            <h3 className='-right-8 z-10 bottom-5 absolute py-3 px-20 w-full text-3xl text-white bg-purplePrimary/75'>
              Artes
            </h3>
            <Image
              src='/images/pain.png'
              alt='skills'
              className='h-full'
              height={500}
              width={300}
            />
          </div>

          <div className='relative h-96'>
            <h3 className='-right-8 z-10 bottom-5 absolute py-3 px-20 w-full text-3xl text-white bg-purplePrimary/75'>
              Jardinería
            </h3>
            <Image
              src='/images/garden.png'
              alt='skills'
              className='h-full'
              height={500}
              width={300}
            />
          </div>

          <div className='relative h-96'>
            <h3 className='-right-8 z-10 bottom-5 absolute py-3 px-20 w-full text-3xl text-white bg-purplePrimary/75'>
              Y más...
            </h3>
            <Image
              src='/images/line.png'
              alt='skills'
              className='h-full'
              height={500}
              width={300}
            />
          </div>
        </div>

        <div className='self-end mr-[5%] p-4'>
          <Button
            customClassNames={
              'text-purplePrimary bg-yellowPrimary rounded-full px-16 font-semibold'
            }
          >
            <Link className='text-purplePrimary font-semibold' href={'/login'}>
              Comenzar
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
