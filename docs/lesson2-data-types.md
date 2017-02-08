# Data Types

## var loveJS = true;

```javascript

	var firstName = "james";
	var age = 32;
	consol.log(firstName);
	
```

## string.replace()

```javascript

var email = "jsong00505@udacity.com";
var newEmail = email.replace("udacity", "gmail");

```

```javascript
var s = "audacity";
s = s[1].toUpperCase() + s.slice(2);
```

## Truthy/Falsy

| Truthy           | Falsy     |
| ---------------- | --------- |
| true             | flase     |
| non-zero numbers | 0         |
| "strings"        | ""        |
| objects          | undefined |
| arrays           | null      |
| functions        | NaN       |
(evaluate to **true**) (evaluate to **false**)

## Arrays

var myArray = [item_1, ..., item_n];

## Array Manipulation

```javascript

function incrementLastArrayElement(_array)  {
    var newArray = [];
    newArray = _array.slice(0);
    var lastNumber = newArray.pop();
    newArray.push(lastNumber + 1);
    return newArray;
}

```

## String Manipulation Quiz2

```javascript

function nameChanger(oldName) {
    var finalName = oldName;
    var names = oldName.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");
    return finalName;
}

```

## Object Literal Notation

There are no classes in JS

```javascript

var myObj = {};

var bio = {
	"name": "jsong",
	"age": 28
};

// add value
bio["city"] = "Seoul";
```
## JSON

JavaScript Object Notation

## Validating JSON

[jsonlint](jsonlint.com)