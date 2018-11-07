import { description, version } from '../../package.json';
import { Router } from 'express';
import tgv from './tgv';

export default () => {
	let api = Router();

	api.use('/tgv', tgv());

	// Default route
	api.get('/', (req, res) => {
		res.json({ description, version });
	});

	return api;
}