'use client';

import { useDispatch } from 'react-redux';
import { onLogout } from '@/store/slices/authSlice';
import { useRouter } from 'next/navigation';

export default function LayoutLogOut({ children }) {
  const dispatch = useDispatch();

  const router = useRouter();
  dispatch(onLogout());
  router.push('/login');

  return <main>{children}</main>;
}
