# Behavior-Driven Development

Using natural language constructs for performing
synchronous and asynchronous application-level tests.

Frank Hellwig
Director of Engineering
Buchanan &amp; Edwards

***

## What is Behavior-Driven Development?

Defines *what* a system **should** do and the *expected* results.

The goal is writing expressive tests using natural-language sentences.

*Have we seen this before?*

***

## Expressiveness is a trend...

In Agile development, we write use-cases like so:

*As a user, I want to change my own password so that administrators need not be bothered.*

This provides more information than...

*Requirement: User password change.*

***

## Testing is no different

    x = 2 + 3

Our test:

    x should be a number and equal five

***

## The old way...

```javascript
let x = 2 + 3;

try {
    assert(typeof x === 'number', 'not a number');
    assert(x === 5, 'not equal to 5');
} catch (e) {
    console.error(e.message);
}
```

***

## What is wrong with that?

Well, nothing, until you have hundreds of test and you are tired of writing `try catch` blocks and you want a pretty printout of your passing and failing tests...

Then you want something better.

***

## We want to test this...

**x should be a number and equal five.**

***

## ...so our code should be this:

```javascript
x.should.be.a('number').and.equal(5);
```

That is the actual code.

I copied it from my `test.js` file.

***

## What is BDD then?

BDD is as much a technique and paradigm as it is having the tools to make such testing easy and enjoyable.

I will now show you how using `mocha` and `chai`.

<small>
N.B. The .NET world has tools such as NSpec, SpecFlow, and LightBDD.
</small>
***

## Mocha

>Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun.

## Chai

>Chai is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.

***

## Summary

The test framework, `mocha`, manages the tests and the test report.

The assertion library, `chai`, lets us write expressive tests.

Now, on to the code...

https://github.com/buchanan-edwards/be.calc
