import bcrypt from 'bcrypt';

const comparePassword = async (DBPassword: string, plainPassword: string): Promise<boolean> => {
  const isCorrect = await bcrypt.compare(plainPassword, DBPassword);
  return isCorrect;
};

export { comparePassword };
