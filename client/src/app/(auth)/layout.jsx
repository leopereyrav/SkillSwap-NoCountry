'use client';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function LayoutAuth({ children }) {
  const currentUser = useSelector((state) => state.user);
  const router = useRouter();

  useEffect(() => {
    if (currentUser.status === 'authenticated') {
      router.push('/home');
    }
  }, [router, currentUser]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const pathname = usePathname();
  let sectionText;
  let imageUrl = pathname == '/login' ? '/auth/man.png' : '/auth/woman.png';

  switch (pathname) {
    case '/login':
      sectionText = '¡Conectate para comenzar a aprender y compartir!';
      break;
    default:
      sectionText = '¡Registrate y comienza a intercambiar conocimiento!';
      break;
  }

  return (
    <div className='h-screen flex justify-center items-center bg-purplePrimary p-2'>
      <div className='flex justify-center items-center h-[75vh]'>
        <div className='rounded-tl-3xl rounded-bl-3xl overflow-y-auto  rounded-tr-3xl md:rounded-tr-none rounded-br-3xl md:rounded-br-none bg-purpleThirty w-auto  lg:w-1/3 h-full p-3'>
          {children}
        </div>
        <div className='relative  w-1/3 h-full hidden md:block'>
          <h2 className='z-10 bottom-0 left-5 absolute text-3xl font-bold mb-6 text-white'>
            {sectionText}
          </h2>
          <div class='bg-gradient-to-t from-purpleSecondary to-yellowButtonDisable  rounded-tr-3xl rounded-br-3xl w-full h-full'>
            <div className='w-full flex items-end h-full rounded-tr-3xl rounded-br-3xl mix-blend-overlay'>
              <img
                src={imageUrl}
                className='w-full h-full object-cover rounded-tr-3xl rounded-br-3xl'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
