"use strict";

import { quickSort, bubbleSort, mergeSort } from "./sorts";
import { jest } from '@jest/globals';

describe.each([
    {sortFn: bubbleSort},
    {sortFn: mergeSort},
    {sortFn: quickSort},
])('simple sort ($sortFn)', ({sortFn}) => {
    const expected = [1,2,3];
    it('already sorted', () => {
        test.each
        const input = [1,2,3];
        const output = sortFn(input);
        expect(output).toEqual(expected);
    });
    it('reversed', () => {
        const input = [3,2,1];
        const output = sortFn(input);
        expect(output).toEqual(expected);
    })

});

describe.each([
    {sortFn: bubbleSort},
    {sortFn: mergeSort},
    {sortFn: quickSort},
])('edge case sort ($sortFn)', ({sortFn}) => {
    it('empty', () => {
        const expected = [];
        const input = [];
        const output = sortFn(input);
        expect(output).toEqual(expected);
    });
    it('one item', () => {
        const expected = [1];
        const input = [1];
        const output = sortFn(input);
        expect(output).toEqual(expected);
    })
});

describe.each([
    {sortFn: bubbleSort},
    {sortFn: mergeSort},
    {sortFn: quickSort},
])('medium sort ($sortFn)', ({sortFn}) => {
    it('mixed', () => {
        const expected = [1,2,3,4,5,6,7,8,9,10];
        const input = [1,2,3,10,5,6,9,4,8,7];
        const output = sortFn(input);
        expect(output).toEqual(expected);
    });
    it('doubled', () => {
        const expected = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10];
        const input = [1,2,3,10,5,6,9,4,8,7,1,2,3,10,5,6,9,4,8,7];
        const output = sortFn(input);
        expect(output).toEqual(expected);
    });
});
