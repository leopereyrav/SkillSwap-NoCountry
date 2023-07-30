'use client';

import { useContext, useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { VideoPlayer } from '@/components/Meet/VideoPlayer';
import { RoomContext } from '@/app/(app)/(meet)/RoomContext';
import Navbar from '@/components/Meet/Navbar';
import Controllers from '@/components/Meet/Controller';
import { BsArrowLeftShort } from 'react-icons/bs';
import Link from 'next/link';
import { BACKEND_URL_BASE } from '@/config/index.js';

function Room() {
  const { id } = useParams();
  const { ws, me, stream, peers } = useContext(RoomContext);
  const [roomExists, setRoomExists] = useState(false);

  const { push } = useRouter();

  useEffect(() => {
    fetch(`${BACKEND_URL_BASE}/rooms/${id}`).then((res) =>
      res.status === 200 ? setRoomExists(true) : setRoomExists(false)
    );
    if (me) ws.emit('join-room', { roomId: id, peerId: me._id });
  }, [ws, me, id]);

  const handleBack = () => {
    push('/home');
  };

  return !roomExists ? (
    <div className='flex flex-col gap-5 w-screen h-screen justify-center items-center'>
      <span>La sala no existe</span>
      <Link href={'/home'}>Volver al inicio</Link>
    </div>
  ) : (
    <div>
      <Navbar />
      <div className='flex justify-center items-center p-2 bg-purpleSecondary border-t-2 border-[#797180]'>
        <span
          className='flex flex-row items-center absolute left-5 text-white cursor-pointer'
          onClick={handleBack}
        >
          {<BsArrowLeftShort />}Atrás
        </span>
        <h1 className='text-[#f8b501] text-xl'>
          Videollamada en curso:{' '}
          <span className='font-semibold'>Asesoria Aleman</span>
        </h1>
      </div>
      <div
        className='bg-[#797180] w-screen flex flex-row flex-wrap justify-center items-center gap-10'
        style={{ height: 'calc(100vh - 11rem)' }}
      >
        <VideoPlayer stream={stream} />
        {Object.values(peers).map((peer, index) => (
          <VideoPlayer key={index} stream={peer.stream} />
        ))}
      </div>
      <Controllers stream={stream} />
    </div>
  );
}

export default Room;
