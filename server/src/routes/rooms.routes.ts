import { Router } from 'express';
import { rooms } from '../database/rooms';

const router = Router();

router.get('/:id', (req, res) => {
  const { id } = req.params;

  const room = rooms[id];
  if (room) {
    res.status(200).json(room);
  } else {
    res.status(404).json({ message: 'Room not found' });
  }
});

export default router;
