import axios from 'axios';

function tgvMaxUri(origin, destination, start, end) {
    return 'https://www.oui.sncf/apim/calendar/train/v4/'
        + origin + '/'
        + destination + '/'
        + start + '/'
        + end + '/'
        + '12-HAPPY_CARD/2/fr?additionalFields=hours&currency=EUR';
}

export const findTrainsHours = (origin, destination, date) => {
    return new Promise((resolve, reject) => {
        axios.get(tgvMaxUri(origin, destination, date, date))
            .then(response => {
                const record = response.data[0];
                const hours = record.price === 0 ? record.hours : [];
                resolve(hours);
            })
            .catch(error => reject(error));
    });
};