function testcase(caption, testfunction) {
    const t1 = new Date();
    testfunction && testfunction();
    const t2 = new Date();
    console.log(`testcase: ${caption} -> ${t2.getTime() - t1.getTime()} ms`);
}

module.exports = {
    testcase
}