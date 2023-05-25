// function to format a timestamp, accepts the timestamp and an `options` object as parameters
module.exports = (timestamp) => {
    // create month object
    const months = {
        0: 'Jan',
        1: 'Feb',
        2: 'Mar',
        3: 'Apr',
        4: 'May',
        5: 'Jun',
        6: 'Jul',
        7: 'Aug',
        8: 'Sep',
        9: 'Oct',
        10: 'Nov',
        11: 'Dec',
    };

    const dateObj = new Date(timestamp)
    const formattedTimeStamp = `${months[dateObj.getMonth()]} ${(dateObj.getDate())}, ${dateObj.getFullYear()}`

    return formattedTimeStamp;
};