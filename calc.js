'use strict';

class Calc {

    add(a, b) {
        _checkArgs(a, b);
        return a + b;
    }

    sub(a, b) {
        _checkArgs(a, b);
        return a - b;
    }

    mul(a, b) {
        _checkArgs(a, b);
        return a * b;
    }

    div(a, b) {
        _checkArgs(a, b);
        if (b === 0) {
            throw new Error('Cannot divide by zero');
        }
        return a / b;
    }

    sqr(x) {
        _checkArgs(x);
        return Math.sqrt(x);
    }
}

function _checkArgs() {
    const args = Array.prototype.slice.call(arguments);
    args.forEach(arg => {
        if (typeof arg !== 'number' || isNaN(arg)) {
            throw new Error(`Expected a number instead of ${typeof arg}`);
        }
    });
}

module.exports = Calc;
