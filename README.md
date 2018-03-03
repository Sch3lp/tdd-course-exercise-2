# TDD Lab Exercise 2

Exercises for http://sch3lp.github.io/tdd-course

## Assignment

### calculate.js

Our customers have reported a bug:

> Abigail is able to log in, but Jos is not. Can you please fix this ASAP so Jos can get back to work again?
>
> Thanks!
>
> PS: last week I also reported a bug that people with an underscore in their username also couldn't log in.
> PPS: If you don't fix this IN PRODUCTION within 30 minutes the company will lose 100.000 EUR!!!!

The senior in our team has already identified the bug to be in this piece of _legacy code_, but doesn't have the time to fix it, so now it's up to you.

```javascript
calculate = (u) => {
    let x = /^(?=[a-z]{2})(?=.{4,26})(?=[^.]*\.?[^.]*$)(?=[^_]*_?[^_]*$)[\w.]+$/gi;
    return u.match(x) !== null;
}
```

This function will return `true` when Abigail attempts to log in, and `false` when Jos attempts to log in.

### url.js

This time it's our ops team that reports a bug:

> Thanks again for saving the company 100.000 EUR, but I'm sorry to report another bug.
> We upgraded our servers overnight because of a failed hack attempt. We started serving our applications with ssl certificates under the https protocol. But we're seeing nothing bugt url verification failures in our logs.
> If you can fix this before 7:00, we might keep our customers from noticing!
> 
> Thanks in advance!

You've searched for a piece of code with _verify url_ and found a highly suspicious piece of code:
```javascript
verifyUrl = (u) => {
	let c = /http:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi;
	let re = new RegExp(c);
	if (!re.test(u)) {
		return false;
	}
	else {
		return true;
	}
}
```

This code does have **unit tests**, so first write a failing test! (in urlTests.js).
