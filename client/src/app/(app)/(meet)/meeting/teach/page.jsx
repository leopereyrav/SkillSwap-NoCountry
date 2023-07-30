'use client';

import { RoomContext } from '@/app/(app)/(meet)/RoomContext';
import CardMeet from '@/components/Meet/CardMeet';
import { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { BACKEND_URL_BASE } from '@/config/index.js';

export default function Meeting() {
  const { ws } = useContext(RoomContext);
  const [data, setData] = useState([]);
  const currentUser = useSelector((state) => state.user);

  const createRoom = (roomId) => {
    ws.emit('create-room', roomId);
  };

  useEffect(() => {
    const token = currentUser.token;
    if (token) {
      fetch(`${BACKEND_URL_BASE}/meetings/instructor`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then(({ data }) => setData(data));
    }
  }, []);

  return (
    <div className='flex items-center flex-col w-screen my-10 gap-5'>
      {!data?.length ? (
        <span>No tenes llamadas</span>
      ) : (
        data.map((card, index) => (
          <CardMeet card={card} id={card.trainee_id} key={index}>
            <button
              onClick={() => createRoom(card.room_id)}
              className='bg-yellow-400 w-8/12 py-2 px-8 rounded-full text-xl text-center hover:bg-purpleIconsAndInputs text-white'
            >
              Iniciar llamada
            </button>
          </CardMeet>
        ))
      )}
    </div>
  );
}
