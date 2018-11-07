import { Router } from 'express';
import { getTrains } from './controller';

export default () => {
    let api = Router();

    api.get('/', getTrains);

    return api;
}