import { Socket } from 'socket.io';

import { rooms } from '../database/rooms';
interface IRoomParams {
  roomId: string;
  peerId: string;
}
export const roomHandler = (socket: Socket) => {
  const createRoom = (roomId: string) => {
    rooms[roomId] = [];
    socket.emit('room-created', { roomId });
    console.log('sala creada');
  };

  const joinRoom = ({ roomId, peerId }: IRoomParams) => {
    if (rooms[roomId]) {
      console.log('el usuario se unio', roomId, peerId);
      rooms[roomId].push(peerId);
      socket.join(roomId);
      socket.to(roomId).emit('user-joined', { peerId });
      socket.emit('get-users', {
        roomId,
        participants: rooms[roomId],
      });
    }

    socket.on('disconnect', () => {
      console.log('user left the room', peerId);
      leaveRoom({ roomId, peerId });
    });
  };

  const leaveRoom = ({ peerId, roomId }: IRoomParams) => {
    rooms[roomId] = rooms[roomId]?.filter((id) => id !== peerId);
    socket.to(roomId).emit('user-disconnected', peerId);
  };

  socket.on('create-room', createRoom);
  socket.on('join-room', joinRoom);
};
