import { findTrainsHours } from './service';

export const getTrains = (req, res) => {
    const { orig, dest, date } = req.query;
    findTrainsHours(orig, dest, date)
        .then(hours => res.status(200).json(hours))
        .catch(err => res.status(400)
            .json({ status: 400, message: 'Bad request parameters' }));
}