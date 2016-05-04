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
const request = require('superagent');

//------------------------------------------------------------------------------
// Initialization
//------------------------------------------------------------------------------

const should = chai.should(); // our assertion library
const calc = new Calc(); // our unit under test
const rest = 'http://localhost:8000/';

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

describe('calc', function() {
    describe('Calc', function() {
        describe('add()', function() {

            it('should return 5 when given 2 and 3', function() {
                let x = calc.add(2, 3);
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

        describe('sub()', function() {

            it('should return 3 when given 5 and 2', function() {
                calc.sub(5, 2).should.be.a('number').and.equal(3);
            });

            it('should throw an error when given non-numeric arguments', function() {
                (function() {
                    calc.sub(5, true);
                }).should.throw(Error);
            });

            it('should throw an error when given insufficient arguments', function() {
                (function() {
                    calc.sub(5);
                }).should.throw(Error);
            });
        });

        describe('mul()', function() {

            it('should return 10 when given 2 and 5', function() {
                calc.mul(2, 5).should.be.a('number').and.equal(10);
            });

            it('should throw an error when given non-numeric arguments', function() {
                (function() {
                    calc.mul(2, true);
                }).should.throw(Error);
            });

            it('should throw an error when given insufficient arguments', function() {
                (function() {
                    calc.mul(2);
                }).should.throw(Error);
            });
        });

        describe('div()', function() {

            it('should return 0.4 when given 2 and 5', function() {
                calc.div(2, 5).should.be.a('number').and.equal(0.4);
            });

            it('should return approximately 0.33 when given 1 and 3', function() {
                calc.div(1, 3).should.be.a('number').and.be.approximately(0.33, 0.01);
            });

            it('should throw an error when given non-numeric arguments', function() {
                (function() {
                    calc.div(2, true);
                }).should.throw(Error);
            });

            it('should throw an error when given insufficient arguments', function() {
                (function() {
                    calc.div(2);
                }).should.throw(Error);
            });

            it('should throw an error when given zero as the second argument', function() {
                (function() {
                    calc.div(2, 0);
                }).should.throw(Error);
            });

            it('should be ok when given zero as the first argument', function() {
                (function() {
                    calc.div(0, 2);
                }).should.be.ok;
            });
        });

        // describe('sqr()', function() {
        //     it('should throw an error when given a negative value', function() {
        //         (function() {
        //             calc.sqr(-9);
        //         }).should.throw(Error);
        //     });
        // });
    });

    describe('API', function() {
        let error = null;
        let result = null;

        function post(op, a, b, done) {
            send(op, a, b, function(err, res) {
                error = err;
                result = res;
                console.log(typeof result);
                done();
            });
        }

        describe('POST add (success)', function() {
            before(function(done) {
                post('add', 2, 3, done);
            });
            it('should receive a 5 when given 2 and 3', function() {
                result.should.be.a('number').and.equal(5);
            });
        });

        describe('POST add (failure)', function() {
            before(function(done) {
                post('add', 2, 'x', done);
            });
            it('should receive an error when given non-numeric arguments', function() {
                result.should.be.an.Error;
            });
        });

        describe('POST add (failure)', function() {
            before(function(done) {
                post('add', 2, null, done);
            });
            it('should receive an error when given insufficient arguments', function() {
                result.should.be.an.Error;
            });
        });

        describe('POST sub', function() {

            it('should return 3 when given 5 and 2', function() {
                calc.sub(5, 2).should.be.a('number').and.equal(3);
            });

            it('should throw an error when given non-numeric arguments', function() {
                (function() {
                    calc.sub(5, true);
                }).should.throw(Error);
            });

            it('should throw an error when given insufficient arguments', function() {
                (function() {
                    calc.sub(5);
                }).should.throw(Error);
            });
        });

        describe('POST mul', function() {

            it('should return 10 when given 2 and 5', function() {
                calc.mul(2, 5).should.be.a('number').and.equal(10);
            });

            it('should throw an error when given non-numeric arguments', function() {
                (function() {
                    calc.mul(2, true);
                }).should.throw(Error);
            });

            it('should throw an error when given insufficient arguments', function() {
                (function() {
                    calc.mul(2);
                }).should.throw(Error);
            });
        });

        describe('POST div', function() {

            it('should return 0.4 when given 2 and 5', function() {
                calc.div(2, 5).should.be.a('number').and.equal(0.4);
            });

            it('should return approximately 0.33 when given 1 and 3', function() {
                calc.div(1, 3).should.be.a('number').and.be.approximately(0.33, 0.01);
            });

            it('should throw an error when given non-numeric arguments', function() {
                (function() {
                    calc.div(2, true);
                }).should.throw(Error);
            });

            it('should throw an error when given insufficient arguments', function() {
                (function() {
                    calc.div(2);
                }).should.throw(Error);
            });

            it('should throw an error when given zero as the second argument', function() {
                (function() {
                    calc.div(2, 0);
                }).should.throw(Error);
            });

            it('should be ok when given zero as the first argument', function() {
                (function() {
                    calc.div(0, 2);
                }).should.be.ok;
            });
        });

        // describe('POST sqr', function() {
        //     it('should throw an error when given a negative value', function() {
        //         (function() {
        //             calc.sqr(-9);
        //         }).should.throw(Error);
        //     });
        // });
    });
});

function send(op, a, b, callback) {
    let content = [op];
    if (a !== null) content.push(a);
    if (b !== null) content.push(b);
    request
        .post(rest)
        .set('Content-Type', 'text/plain')
        .send(content.join(' '))
        .end((err, res) => {
            callback(err, parseFloat(res.text));
        });
}
