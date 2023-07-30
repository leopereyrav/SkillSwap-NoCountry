'use client';

import Button from '@/components/Button';
import { useRouter } from 'next/navigation';

export default function Habilidades() {
  const router = useRouter();

  return (
    <div className='h-full'>
      <h1 className='text-4xl text-center mt-5'>
        Revisa tu correo electrónico
      </h1>
      <div className='h-full flex justify-center'>
        <div className='flex items-center justify-center flex-col h-[80%] w-fit'>
          <svg
            width='60'
            height='60'
            viewBox='0 0 60 60'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M53.8649 12.7775C54.568 13.4808 54.9629 14.4344 54.9629 15.4288C54.9629 16.4232 54.568 17.3768 53.8649 18.08L25.7574 46.1875C25.386 46.5591 24.945 46.8538 24.4596 47.0549C23.9743 47.2559 23.4541 47.3594 22.9287 47.3594C22.4033 47.3594 21.8831 47.2559 21.3977 47.0549C20.9124 46.8538 20.4714 46.5591 20.0999 46.1875L6.13494 32.225C5.77678 31.8791 5.4911 31.4653 5.29456 31.0078C5.09803 30.5503 4.99458 30.0582 4.99025 29.5603C4.98593 29.0624 5.08081 28.5686 5.26936 28.1077C5.45792 27.6469 5.73636 27.2282 6.08846 26.8761C6.44056 26.524 6.85925 26.2455 7.32012 26.057C7.78098 25.8684 8.27478 25.7735 8.7727 25.7779C9.27062 25.7822 9.7627 25.8856 10.2202 26.0822C10.6777 26.2787 11.0915 26.5644 11.4374 26.9225L22.9274 38.4125L48.5599 12.7775C48.9082 12.4291 49.3217 12.1526 49.7768 11.964C50.232 11.7754 50.7198 11.6783 51.2124 11.6783C51.7051 11.6783 52.1929 11.7754 52.6481 11.964C53.1032 12.1526 53.5167 12.4291 53.8649 12.7775Z'
              fill='#903ED0'
            />
          </svg>

          <h2 className='text-xl'>
            Hemos enviando un correo con un enlace para restablecer tu
            contraseña
          </h2>
          <Button
            onClick={() => {
              router.push('/login');
            }}
            customClassNames='w-full mt-10 !text-black rounded-xl bg-yellowPrimary'
          >
            Iniciar sesión
          </Button>
        </div>
      </div>
    </div>
  );
}
