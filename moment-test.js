const moment = require('moment');
const tool = require('./tool');
const date1 = '2018-01-22T00:00:00.000Z',
    date2 = '2018-07-01T00:00:00.000Z',
    date3 = [2018, 0, 22],
    date4 = [2018, 6, 1];
const iterations = 10000;

function compareDate(dateStart, dateEnd) {
    return moment(dateEnd).diff(
        moment(dateStart), 'days'
    );
};
function compareDateJS(dateStart, dateEnd) {
    const d1 = dateStart instanceof Array ? new Date(dateStart[0], dateStart[1], dateStart[2]) : new Date(dateStart);
    const d2 = dateEnd instanceof Array ? new Date(dateEnd[0], dateEnd[1], dateEnd[2]) : new Date(dateEnd);
    return Math.round((d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24));
};

console.log(`testing moment functions with ${iterations} iterations`);

tool.testcase('withoutMoment', () => {
    for (var i=0; i< iterations; i++) {
        compareDateJS(date3, date4);
    }
});

tool.testcase('withMoment  ', () => {
    for (var i=0; i< iterations; i++) {
        compareDate(date1, date2);
    }
});