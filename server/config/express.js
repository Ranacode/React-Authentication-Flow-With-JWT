import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(logger('dev'));

export default app;
