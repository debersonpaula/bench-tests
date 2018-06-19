const tool = require('./tool');
const _ = require('lodash');
const data = {
    info: 'bla bla bla'
}
const iterations = 1000000;

console.log(`testing lodash functions with ${iterations} iterations`);

tool.testcase('object key', () => {
    for (let i=0; i< iterations; i++) {
        data.info;
    }
});

tool.testcase('lodash get', () => {
    for (var i=0; i< iterations; i++) {
        _.get(data, 'info');
    }
});