import express, { Request, Response } from 'express';

const app = express(); // express 객체 받아옴

app.get('/', (req: Request, res: Response) => {
  res.send('Hi! This is my first express server');
}); // HTTP GET method 정의

app.listen('8000', () => {
  console.log(`
    #############################################
        🛡️ Server listening on port: 8000 🛡️
    #############################################    
    `);
}); // 8000번 포트에서 서버 실행
