import mongoose from 'mongoose';
import colors from '@colors/colors';
import { config } from './config';

const DB_URI = <string>config.DB.DB_URI_DEV;

export default async function dbConnect() {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(DB_URI);
    console.log(colors.bgCyan.black('==>> ** Successful Connection to the DataBase ** '));
  } catch (error) {
    console.log(colors.bgRed.black(`** Error Connecting to DataBase -- [${error}] **`));
  }
}
