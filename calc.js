'use strict';

class Calc {

    add(a, b) {
        _checkArgs(a, b);
        return a + b;
    }

    subtract(a, b) {
        _checkArgs(a, b);
        return a - b;
    }

    multiply(a, b) {
        _checkArgs(a, b);
        return a * b;
    }

    divide(a, b) {
        _checkArgs(a, b);
        if (b === 0) {
            throw new Error('Cannot divide by zero');
        }
        return a / b;
    }

    sqrt(x) {
        _checkArgs(x);
        return Math.sqrt(x);
    }
}

function _checkArgs() {
	const args = Array.prototype.slice.call(arguments);
    args.forEach(arg => {
        if (typeof arg !== 'number') {
            throw new Error(`Expected a number instead of ${typeof arg}`);
        }
    });
}

module.exports = Calc;
