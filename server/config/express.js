import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import { UserRoutes } from '../api';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(logger('dev'));

app.use('/api', [UserRoutes]);

export default app;
