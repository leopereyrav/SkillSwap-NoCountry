import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import 'dotenv/config';
import { Server as webSocketServer } from 'socket.io';
import http from 'http';
import colors from '@colors/colors';

import router from './routes';
import dbConnect from './config/database';

import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './utils/swaggerSpec';
import { config } from './config/config';
import { roomHandler } from './room/index';
import { ExpressPeerServer } from 'peer';

class Server {
  app: Application;
  port: number = Number(process.env.PORT) || 3001;
  corsOptions = {};

  constructor() {
    this.app = express();
    this.config();
    this.routes();
    this.corsOptions = {
      origin: config.FRONTEND_URL_BASE,
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization', 'multipart/form-data'],
      credentials: true,
      preflightContinue: true,
    };
  }

  config(): void {
    this.app.use(morgan('dev'));
    this.app.use(cors(this.corsOptions));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  routes(): void {
    this.app.use('/api/v1', router).use('/api/v1-doc', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  }

  start(): void {
    const httpServer = http.createServer(this.app);

    const peerOptions: any = {
      debug: true,
    };

    const peerServer = ExpressPeerServer(httpServer, peerOptions);
    this.app.use('/peerjs', peerServer);

    httpServer
      .listen(this.port, () => {
        console.log(colors.bgGreen.black(`Server Running on Port ${this.port}`));
      })
      .on('error', (error) => {
        console.log(colors.bgRed.black(`Error Starting Server -- [${error}]`));
      });

    const io = new webSocketServer(httpServer, {
      cors: {
        origin: '*',
        methods: ['GET', 'POST'],
      },
    });
    io.on('connection', (socket) => {
      console.log(colors.bgMagenta.black('=> ** Websocket connection **'));
      roomHandler(socket);
      socket.on('disconnect', () => {
        console.log(colors.yellow('=> ** Websocket connection finished **'));
      });
    });
  }
}

const server = new Server();
server.start();
dbConnect();
