import nodemailer from 'nodemailer';
import { config } from './config';

//CREATE CONNECTION FOR LIVE
export const transporter = nodemailer.createTransport({
  host: config.SMTP.SMTP_HOST,
  port: config.SMTP.SMTP_PORT,
  auth: {
    user: config.SMTP.SMTP_USERNAME,
    pass: config.SMTP.SMTP_PASSWORD,
  },
});

//VERIFY CONNECTION
export async function verifyConnection() {
  return transporter.verify();
}
