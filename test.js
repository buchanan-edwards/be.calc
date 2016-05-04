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

            it('should return close to 0.33 when given 1 and 3', function() {
                calc.div(1, 3).should.be.a('number').and.be.closeTo(0.33, 0.01);
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
        return; // for now
        let value = null;

        function post(op, a, b) {
            return function(done) {
                send(op, a, b, function(result) {
                    value = result;
                    done();
                });
            };
        }

        describe('add', function() {
            describe('POST add 2 3', function() {
                before(post('add', 2, 3));
                it('should receive a 5 when given 2 and 3', function() {
                    value.should.be.a('number').and.equal(5);
                });
            });

            describe('POST add 2 true', function() {
                before(post('add', 2, true));
                it('should receive an error when given non-numeric arguments', function() {
                    value.should.be.an('error');
                });
            });

            describe('POST add 2', function() {
                before(post('add', 2, null));
                it('should receive an error when given insufficient arguments', function() {
                    value.should.be.an('error');
                });
            });
        });

        describe('sub', function() {
            describe('POST sub 5 2', function() {
                before(post('sub', 5, 2));
                it('should receive 3 when given 5 and 2', function() {
                    value.should.be.a('number').and.equal(3);
                });
            });

            describe('POST sub 5 true', function() {
                before(post('sub', 5, true));
                it('should receive an error when given non-numeric arguments', function() {
                    value.should.be.an('error');
                });
            });

            describe('POST sub 5', function() {
                it('should receive an error when given insufficient arguments', function() {
                    before(post('sub', 5, null));
                    value.should.be.an('error');
                });
            });
        });

        describe('mul', function() {
            describe('POST mul 2 5', function() {
                before(post('mul', 2, 5));
                it('should receive 10 when given 2 and 5', function() {
                    value.should.be.a('number').and.equal(10);
                });
            });

            describe('POST mul 2 true', function() {
                before(post('mul', 2, true));
                it('should receive an error when given non-numeric arguments', function() {
                    value.should.be.an('error');
                });
            });

            describe('POST mul 2', function() {
                before(post('mul', 2, null));
                it('should receive an error when given insufficient arguments', function() {
                    value.should.be.an('error');
                });
            });
        });

        describe('div', function() {
            describe('POST div 2 5', function() {
                before(post('div', 2, 5));
                it('should receive 0.4 when given 2 and 5', function() {
                    value.should.be.a('number').and.equal(0.4);
                });
            });

            describe('POST div 1 3', function() {
                before(post('div', 1, 3));
                it('should receive close to 0.33 when given 1 and 3', function() {
                    value.should.be.a('number').and.be.closeTo(0.33, 0.01);
                });
            });

            describe('POST div 2 true', function() {
                before(post('div', 2, true));
                it('should receive an error when given non-numeric arguments', function() {
                    value.should.be.an('error');
                });
            });

            describe('POST div 2', function() {
                before(post('div', 2, null));
                it('should receive an error when given insufficient arguments', function() {
                    value.should.be.an('error');
                });
            });

            describe('POST div 2 0', function() {
                before(post('div', 2, 0));
                it('should receive an error when given zero as the second argument', function() {
                    value.should.be.an('error');
                });
            });

            describe('POST div 0 2', function() {
                before(post('div', 0, 2));
                it('should be receive 0 when given zero as the first argument', function() {
                    value.should.be.a('number').and.equal(0);
                });
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
            let result = err || parseFloat(res.text);
            callback(result);
        });
}
