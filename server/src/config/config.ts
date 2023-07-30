export const config = {
  PORT: process.env.PORT,
  BACKEND_URL_BASE: process.env.BACKEND_URL_BASE,
  FRONTEND_URL_BASE: process.env.FRONTEND_URL_BASE,
  DB: {
    BD_URI_PROD: process.env.BD_URI_PROD,
    DB_URI_DEV: process.env.DB_URI_DEV,
  },
  JWT: {
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIRES_IN: process.env.JWT_EXPIRE_IN,
    JWT_RECOVERY_PASSWORD_EXPIRES: process.env.JWT_PASSWORD_EXPIRES,
  },
  SMTP: {
    SMTP_HOST: process.env.SMTP_HOST,
    SMTP_PORT: process.env.SMTP_PORT,
    SMTP_USERNAME: process.env.SMTP_USERNAME,
    SMTP_PASSWORD: process.env.SMTP_PASSWORD,
    SMTP_SENDER: process.env.SMTP_SENDER,
  },
  CLOUDINARY: {
    CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
  },
};
