import http from 'http';
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import api from './api';

// Create app server
let app = express();
app.server = http.createServer(app);

// HTTP request logger
app.use(morgan('dev'));

// Body parser
app.use(bodyParser.json());

// API router
app.use('/api', api());

// Start app server
app.server.listen(process.env.PORT || 8080, () => {
	console.log(`Node server listening on port ${app.server.address().port}`);
});

export default app;