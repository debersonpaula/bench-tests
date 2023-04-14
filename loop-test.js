const tool = require('./tool');

const iterations = 5000000;

const list = [];
for (var i = 0; i < iterations; i++) {
    list.push(0);
}

console.log(`testing loop functions with ${list.length} iterations`);

tool.testcase('for    ', () => {
    const length = list.length;
    let i;
    const data = [];
    for (i = 0; i < length; i++) {
        data.push(list[i]);
    }
});

tool.testcase('for in ', () => {
    const data = [];
    for (const i in list) {
        data.push(list[i]);
    }
});

tool.testcase('forEach', () => {
    const data = [];
    list.forEach(value => { data.push(value) });
});

tool.testcase('map    ', () => {
    const data = list.map(value => { return value });
});

tool.testcase('reduce ', () => {
    const data = list.reduce((total, value) => {
        total.push(value);
        return total;
    }, []);
});

tool.testcase('filter ', () => {
    const data = list.filter((value) => { return true });
});

