'use strict';

const chai = require('chai');
const should = chai.should(); // our assertion library

describe('A simple test', function() {
    describe('addition', function() {
        it('should return 5 when given 2 and 3', function() {
            let x = 2 + 3;
            x.should.be.a('number').and.equal(5);
        });
    });
});
