const { expect } = require('@jest/globals');
const {getNumber, addValueToArray, createAGrid} = require('./index')

test("0 and 2 should return a value between 0 and 2",()=>{
    expect(getNumber(0,2)).toBeGreaterThanOrEqual(0);
    expect(getNumber(0,2)).toBeLessThanOrEqual(2);
})

test("[1,2] and 3 should contain 3",()=>{
    const testArray = [1,2];
    const minValue = 1;
    const maxValue = 3;
    addValueToArray(testArray,minValue,maxValue)
    expect(testArray).toContain(3);
})

test("[] with a count of 5 should return [1,2,3,4,5]",()=>{
    const grid = [];
    const count = 5;
    const minValue = 1;
    const maxValue = 5;
    createAGrid(grid,count,minValue, maxValue)
    expect(grid).toContain(1);
    expect(grid).toContain(2);
    expect(grid).toContain(3);
    expect(grid).toContain(4);
    expect(grid).toContain(5);
    expect(grid).toHaveLength(5)
})