import axios from 'axios';

function tgvMaxUri(origin, destination, start, end) {
    return 'https://www.oui.sncf/apim/calendar/v5/outward/'
        + origin + '-'
        + destination + '/'
        + start + '/'
        + end + '/'
        + '12-HAPPY_CARD?market=fr&vehicleTypes=TRAIN,BUS_TRAIN&travelClass=2&extendedToLocality=true&additionalFields=hours&currency=EUR&client=VSD';
}

export const findTrainsHours = (origin, destination, date) => {
    return new Promise((resolve, reject) => {
        const url = tgvMaxUri(origin, destination, date, date);
        const headers = {
            // Spoof user agent to bypass SNCF evil check :)
            'User-Agent': 'Mozilla/5.0 (X11; Linux i686; rv:89.0) Gecko/20100101 Firefox/89.0'
        };
        axios.get(url, { headers })
            .then(response => {
                const record = response.data[0];
                const hours = record.price === 0 ? record.hours : [];
                resolve(hours);
            })
            .catch(error => reject(error));
    });
};
