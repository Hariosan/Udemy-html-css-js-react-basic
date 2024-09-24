var name = prompt("What is your name ");

var firstChar = Name.slice(0,1)

var upperCaseFitrstChar = firstChar.toUpperCase();

var restOfName = Name.slice(1,Name.length);

restOfName = restOfName.toLocaleLowerCase();

var capitalisedName = upperCaseFitrstChar + restOfName;

alert("Hello " + capitalisedName);