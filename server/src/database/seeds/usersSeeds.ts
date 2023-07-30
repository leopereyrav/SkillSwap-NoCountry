import 'dotenv/config';
import bcrypt from 'bcryptjs';

export const getUsers = async () => {
  const password: string = process.env.PASSWORD_SEED!;
  const hash = await bcrypt.hash(password, 10);
  return [
    {
      username: 'Regina',
      email: 'regina@gmail.com',
      password: hash,
      role: ['trainee', 'instructor'],
    },
    {
      username: 'Adhemir',
      email: 'adhemir@gmail.com',
      password: hash,
      role: ['trainee', 'instructor'],
    },
    {
      username: 'Victor',
      email: 'victor@gmail.com',
      password: hash,
      role: ['trainee', 'instructor'],
    },
    {
      username: 'Ismael',
      email: 'ismael@gmail.com',
      password: hash,
      role: ['trainee', 'instructor'],
    },
    {
      username: 'Jose',
      email: 'jose@gmail.com',
      password: hash,
      role: ['trainee', 'instructor'],
    },
    {
      username: 'Felipe',
      email: 'felipe@gmail.com',
      password: hash,
      role: ['trainee', 'instructor'],
    },
    {
      username: 'Francia',
      email: 'francia@gmail.com',
      password: hash,
      role: ['trainee', 'instructor'],
    },
    {
      username: 'Leonardo',
      email: 'leonardo@gmail.com',
      password: hash,
      role: ['trainee', 'instructor'],
    },
    {
      username: 'Michael',
      email: 'michael@gmail.com',
      password: hash,
      role: ['trainee', 'instructor'],
    },
    {
      username: 'Isaac',
      email: 'isaac@gmail.com',
      password: hash,
      role: ['trainee', 'instructor'],
    },
    {
      username: 'Gabriel',
      email: 'gabriel@gmail.com',
      password: hash,
      role: ['trainee', 'instructor'],
    },
    {
      username: 'Matias',
      email: 'matias@gmail.com',
      password: hash,
      role: ['trainee', 'instructor'],
    },
  ];
};