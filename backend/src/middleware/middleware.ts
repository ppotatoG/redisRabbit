import express from 'express';

export const setupMiddleware = (app: express.Express) => {
  app.use(express.static('public'));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
};
