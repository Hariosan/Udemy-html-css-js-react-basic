function lifeInWeeks(age) {
    var yearsRemaining = 90 - age;
    var months = yearsRemaining * 12;
    var weeks = yearsRemaining * 52;
    var days = yearsRemaining * 365;
    
    console.log("We have " + days + " days, " + weeks + " weeks, and " + months + " months left.");
}


lifeInWeeks(12);
