const { assert } = require("chai");
const calcs = require('../calc.js');
const Calc = calcs.Calc;

describe('Calc', () => {
    describe('.add', () => {
      it('returns the sum of two values', () => {
        // Your test goes here
        const calc = new Calc();
        const answer = calc.add(1,2);
        assert.ok(answer===3);
      });
      it('logs an error with only one input and undefined memory', () => {
        // Your test goes here
        const calc = new Calc();
        const answer = calc.add(1);
        assert.ok(answer===undefined);
      });
    });
/*
    describe('.subtract', () => {
      it('returns the substraction of two values', () => {
        // Your test goes here
        const calc = new Calc();
        const answer = calc.subtract(1,3);
        assert.ok(answer===2);
      });
      it('logs an error without the substract', () => {
        // Your test goes here
        const calc = new Calc();
        const answer = calc.subtract(1);
        assert.ok(answer===undefined);
      });
    });*/  that is my ProgressEvent, pay attention to details 
  });