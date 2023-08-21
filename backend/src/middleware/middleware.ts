import express from 'express';
import cors from 'cors';

export const setupMiddleware = (app: express.Express) => {
  app.use(cors());
  app.use(express.static('public'));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
};
