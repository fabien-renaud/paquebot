const days = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
const months = ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Jui', 'Jui', 'Aou', 'Sep', 'Oct', 'Nov', 'Dec'];
const formatTwoDigitNumber = (number) => `0${number}`.slice(-2);

const formatDate = (date) => {
    const day = days[date.getDay()];
    const hour = formatTwoDigitNumber(date.getHours());
    const min = formatTwoDigitNumber(date.getMinutes());
    return day + ' ' + hour + ':' + min;
};

export default {formatDate};
