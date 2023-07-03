import dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';
import path from 'path';
import cors from 'cors';
import {
    userRouter, gradesRouter, scheduleRouter, subjectsRouter, teachersRouter, sectionsRouter
} from './routes';

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(cors());


app.use('/api', [userRouter, gradesRouter, scheduleRouter, subjectsRouter, teachersRouter, sectionsRouter]);

app.use(express.static('files'));

const port = process.env.PORT || 8001;

app.listen(port, () => {
    console.log(`Server listening on ${port} port`);
});
