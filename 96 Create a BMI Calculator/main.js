function bmiCalculator(weight, height)
{
    let bmi = weight / (height * height);
    return Math.round(bmi);
}

let bmi = bmiCalculator(65, 1.8);
console.log(bmi);
