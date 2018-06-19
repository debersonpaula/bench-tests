const tool = require('./tool');

const iterations = 10000000;

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

tool.testcase('obj.x = 0', () => {
    let i = 0;
    for (; i < iterations; i++) {
        const obj = {};
        obj.x = 0;
    }
});

tool.testcase('Object.defineProperty(obj, "x", withValue(0))', () => {
    let i = 0;
    for (; i < iterations; i++) {
        const obj = {};
        Object.defineProperty(obj, 'x', { value: 0 });
    }
});

tool.testcase('object properties access direct', () => {
    let i = 0;
    const obj1 = {
        obj2: {
            obj3: {
                value: 'done'
            }
        }
    }
    for (; i < iterations; i++) {
        obj1.obj2.obj3.value = 'test';
    }
});

tool.testcase('object properties access with ref', () => {
    let i = 0;
    const obj1 = {
        obj2: {
            obj3: {
                value: 'done'
            }
        }
    }
    const ref = obj1.obj2.obj3;
    for (; i < iterations; i++) {
        ref.value = 'test';
    }
});
