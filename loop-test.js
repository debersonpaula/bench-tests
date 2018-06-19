const tool = require('./tool');

const iterations = 1000000;

const list = [];
for (var i = 0; i < iterations; i++) {
    list.push(0);
}

console.log(`testing loop functions with ${list.length} iterations`);

tool.testcase('for    ', () => {
    const length = list.length;
    let i;
    for (i = 0; i < length; i++) {
        list[i] = 1;
    }
});

tool.testcase('for in ', () => {
    for (const i in list) {
        list[i] = 0;
    }
});

tool.testcase('forEach', () => {
    list.forEach(value => { value });
});

tool.testcase('map    ', () => {
    list.map(value => { return value });
});

tool.testcase('reduce ', () => {
    list.reduce((total, value) => { return total + value });
});

tool.testcase('filter ', () => {
    list.filter((value) => { return value });
});

