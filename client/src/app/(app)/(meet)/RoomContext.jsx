'use client';

import { createContext, useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { PEER_HOST, PEER_PORT, WEBSOCKET_URL } from '@/config/index.js';

export const RoomContext = createContext(null);
const WS = WEBSOCKET_URL;
const ws = io(WS);
import { v4 as uuidV4 } from 'uuid';
import { useRouter } from 'next/navigation';

export const RoomProvider = ({ children }) => {
  const [me, setMe] = useState();
  const [participants, setParticipants] = useState();
  const [stream, setStream] = useState();
  const [peers, setPeers] = useState({});
  const { push } = useRouter();

  const enterRoom = ({ roomId }) => {
    push(`/rooms/${roomId}`);
  };

  const getUsers = ({ participants }) => {
    setParticipants(participants);
  };

  const leaveRoom = (peerId) => {
    setPeers((prevPeers) => {
      const newPeers = { ...prevPeers };
      delete newPeers[peerId];
      return newPeers;
    });
  };

  useEffect(() => {
    const meId = uuidV4();
    (() => {
      import('peerjs').then((data) => {
        const peer = new data.Peer(meId, {
          path: '/peerjs',
          host: `${PEER_HOST}`,
          port: PEER_PORT,
        });
        setMe(peer);
      });
    })();

    try {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then((stream) => {
          setStream(stream);
        });
    } catch (error) {
      console.log(error);
    }

    ws.on('user-disconnected', leaveRoom);
    ws.on('room-created', enterRoom);
    ws.on('get-users', getUsers);

    return () => {
      ws.off('user-disconnected');
      ws.off('room-created');
      ws.off('get-users');

      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  useEffect(() => {
    if (!me) return;
    if (!stream) return;
    ws.on('user-joined', ({ peerId }) => {
      //aca inicializamos la llamada y pasamos nuestro stream
      const call = me.call(peerId, stream);
      call.on('stream', (peerStream) => {
        setPeers((prev) => ({ ...prev, [peerId]: { stream: peerStream } }));
      });
    });

    me.on('error', (err) => {
      console.log(err);
    });

    //Aqui escuchamos una llamada y respondemos con nuestro stream
    me.on('call', (call) => {
      call.answer(stream);
      call.on('stream', (peerStream) => {
        setPeers((prev) => ({ ...prev, [call.peer]: { stream: peerStream } }));
      });
    });

    return () => {
      ws.off('user-joined');

      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [me, stream]);

  return (
    <RoomContext.Provider value={{ ws, me, stream, peers, participants }}>
      {children}
    </RoomContext.Provider>
  );
};
