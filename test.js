//==============================================================================
// Test the calc application.
//==============================================================================
// Author: Frank Hellwig
// Copyright (c) 2016 Buchanan & Edwards
//==============================================================================

'use strict';

//------------------------------------------------------------------------------
// Dependencies
//------------------------------------------------------------------------------

const Calc = require('./calc');
const chai = require('chai');

//------------------------------------------------------------------------------
// Initialization
//------------------------------------------------------------------------------

let should = chai.should(); // our assertion library

let calc = new Calc(); // our unit under test

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

describe('Calc', function() {

    describe('add()', function() {

        it('should return 5 when given 2 and 3', function() {
            let x = calc.add(2,3);
            x.should.be.a('number').and.equal(5);
        });

        it('should throw an error when given non-numeric arguments', function() {
            (function() {
                calc.add(2, true);
            }).should.throw(Error);
        });

        it('should throw an error when given insufficient arguments', function() {
            (function() {
                calc.add(2);
            }).should.throw(Error);
        });
    });

    describe('subtract()', function() {

        it('should return 3 when given 5 and 2', function() {
            calc.subtract(5, 2).should.be.a('number').and.equal(3);
        });

        it('should throw an error when given non-numeric arguments', function() {
            (function() {
                calc.subtract(5, true);
            }).should.throw(Error);
        });

        it('should throw an error when given insufficient arguments', function() {
            (function() {
                calc.subtract(5);
            }).should.throw(Error);
        });
    });

    describe('multiply()', function() {

        it('should return 10 when given 2 and 5', function() {
            calc.multiply(2, 5).should.be.a('number').and.equal(10);
        });

        it('should throw an error when given non-numeric arguments', function() {
            (function() {
                calc.multiply(2, true);
            }).should.throw(Error);
        });

        it('should throw an error when given insufficient arguments', function() {
            (function() {
                calc.multiply(2);
            }).should.throw(Error);
        });
    });

    describe('divide()', function() {

        it('should return 0.4 when given 2 and 5', function() {
            calc.divide(2, 5).should.be.a('number').and.equal(0.4);
        });

        it('should return approximately 0.33 when given 1 and 3', function() {
            calc.divide(1, 3).should.be.a('number').and.be.approximately(0.33, 0.01);
        });

        it('should throw an error when given non-numeric arguments', function() {
            (function() {
                calc.divide(2, true);
            }).should.throw(Error);
        });

        it('should throw an error when given insufficient arguments', function() {
            (function() {
                calc.divide(2);
            }).should.throw(Error);
        });

        it('should throw an error when given zero as the second argument', function() {
            (function() {
                calc.divide(2, 0);
            }).should.throw(Error);
        });

        it('should be ok when given zero as the first argument', function() {
            (function() {
                calc.divide(0, 2);
            }).should.be.ok;
        });
    });

    // describe('sqrt()', function() {
    //     it('should throw an error when given a negative value', function() {
    //         (function() {
    //             calc.sqrt(-9);
    //         }).should.throw(Error);
    //     });
    // });
});

console.log(calc.sqrt(5));
console.log(calc.sqrt(-5));