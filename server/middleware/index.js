import express from 'express';
import cookieParser from 'cookie-parser';
import expressSession from 'express-session';
import sessionFileStore from 'session-file-store';
import cors from 'cors';
import dbConnect from './dbConnect.js';

const FileStore = sessionFileStore(expressSession);

const config = (app) => {
  dbConnect();

  app.use(cors());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.use(cookieParser());

  app.use(expressSession({
    store: new FileStore(),
    key: 'auth',
    secret: 'superdupersecretword',
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 6000000,
      httpOnly: false,
    },
  }));
};

export default config;
