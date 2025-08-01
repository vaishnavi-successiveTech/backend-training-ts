import { startServer } from './server';
import express from 'express';

const app = express();
app.use(express.json());
startServer();

