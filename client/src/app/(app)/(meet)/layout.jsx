'use client';

import { RoomProvider } from '@/app/(app)/(meet)/RoomContext';

export default function AppLayout({ children }) {
  return <RoomProvider>{children}</RoomProvider>;
}
