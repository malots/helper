import moment from 'moment';

function isDate(date,format='MM-DD-YYYY') {
    const confirmDate = moment(date, format, true);
    return confirmDate.isValid();
}

function now(format='MM-DD-YYYY') {
    return moment().format(format);
}

export { isDate, now };
