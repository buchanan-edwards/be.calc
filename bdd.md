title: Behavior-Driven Development
author:
    name: Frank Hellwig
    email: frank.hellwig@buchanan-edwards.com
output: bdd.html
controls: false

--

# Behavior-Driven Development

## Using natural language constructs for performing synchronous and asynchronous application-level tests.

--

### First Thursday Tech Talk

This seminar is the first in a monthly installment of tech talks held on the first Thursday of each month.

We call it:

>FT3

It is part of the Software Engineering Community of Practice and we encourage all of you to participate in this new CoP.

--

### What is Behavior-Driven Development?

Specifies what a system **should** and **should not** do using natural-language sentences.

- Invented by Dan North
- Focuses on *should* and *should not* instead of the word *test*
- Can serve as acceptance tests
- Parallels agile methodologies

--

### What's the difference between BDD and TDD?

"In software engineering, BDD is a software development process that emerged from TDD. BDD combines the general techniques and principles of TDD with ideas from domain-driven design and object-oriented analysis and design to provide software development and management teams with shared tools and a shared process to collaborate on software development."

<small>https://en.wikipedia.org/wiki/Behavior-driven_development</small>

--

### Expressiveness is a trend...

In Agile development, we write use-cases like so:

>*As a user, I want to change my own password so that administrators need not be bothered.*

These are written in the form:

- **As** [X],
- **I want** [Y]
- **so that** [Z].

--

### ...and BDD follows this trend

In BDD, we write statements that parallel user stories using natural language.

- **Given** some initial context (the givens),
- **when** an event occurs,
- **then** ensure some outcomes.

BDD tools allow us to carry this forward to the actual code.

--

### Tell me what you want

If this is what we want to test...

>*x = 2 + 3*

...then the resulting behavior should read like this:

>*x should be a number and equal five*

Again, it's as much about what the system **should not** do (e.g., divide by zero) as much as what it **should** do.

--

### The old way...

```javascript
let x = 2 + 3;

try {
    assert(typeof x === 'number', 'not a number');
    assert(x === 5, 'not equal to 5');
} catch (e) {
    console.error(e.message);
}
```

**What is wrong with that?**

Well, nothing, until you have hundreds of test and you are tired of writing `try catch` blocks and you want a pretty printout of your passing and failing tests and you want to test asynchronous code such as REST APIs.

Then it is a chore and you want something better.

--

### We want to test this...

**x should be a number and equal five.**

--

### ...so our code should be this:

x.should.be.a('number').and.equal(5);

That is the actual code.

I copied it from my `test.js` file.

--

### What is BDD then?

BDD is as much a technique and paradigm as it is having the tools to make such testing easy and enjoyable.

I will now show you how using `mocha` and `chai`.

<small>
N.B. The .NET world has tools such as NSpec, SpecFlow, and LightBDD.
</small>

--

### Mocha and Chai

- Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun.

- Chai is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.

--

### Summary

The test framework, `mocha`, manages the tests and the test report.

The assertion library, `chai`, lets us write expressive tests.

Now, on to the code...

https://github.com/buchanan-edwards/be.calc
