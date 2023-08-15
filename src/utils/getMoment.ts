import moment from 'moment';

const getMoment = (timestamp: number): string => {
    const timeAgo = moment(timestamp).fromNow();
    return timeAgo;
}

export default getMoment;