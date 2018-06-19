const tool = require('./tool');

const iterations = 1000000;

console.log(`testing objects with ${iterations} iterations`);

tool.testcase('obj = {}', () => {
    let i = 0;
    for (; i < iterations; i++) {
        const obj = {};
    }
});

tool.testcase('obj = Object.create(null)', () => {
    let i = 0;
    for (; i < iterations; i++) {
        const obj = Object.create(null);
    }
});

tool.testcase('obj["x"] = 0', () => {
    let i = 0;
    for (; i < iterations; i++) {
        const obj = {};
        obj["x"] = 0;
    }
});

tool.testcase('Object.defineProperty(obj, "x", withValue(0))', () => {
    let i = 0;
    for (; i < iterations; i++) {
        const obj = {};
        Object.defineProperty(obj, 'x', { value: 0 });
    }
});
