'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { usePathname, useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

export default function AppLayout({ children }) {
  const currentUser = useSelector((state) => state.user);
  const router = useRouter();
  const pathname = usePathname();

  if (currentUser.statusRegister === 'registered') {
    router.push('/habilidad/ensenar');
  } else {
    if (
      currentUser.status === 'not-authenticated' ||
      currentUser.status === 'checking'
    ) {
      router.push('/login');
    }
  }

  if (!currentUser?.token) {
    router.push('/logout');
  }

  return (
    <div className='flex flex-col min-h-screen'>
      {pathname.split('/')[1] !== 'rooms' && <Navbar />}
      <main className='flex-grow'>
        <div className='mx-auto'>{children}</div>
      </main>
      {pathname.split('/')[1] !== 'rooms' && <Footer />}
    </div>
  );
}
