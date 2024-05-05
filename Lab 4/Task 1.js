// Question 1: find the square of a given number
function square(number){
    return number*number;
}

// Question 2: find sum of cubes of two numbers
function sumOfCubes(num1, num2){
    var cube1 = num1*num1*num1;
    var cube2 = num2*num2*num2;
    return cube1 + cube2;
}

// Question 3: reverse a number 
function reverseNumber(number){
    var numString = number.toString();
    var reversedString = numString.split('').reverse().join('');
    var reversedNumber = parseInt(reversedString);
    return reversedNumber;
}

// Question 4: print all numbers between 1 and 100 which is divisible by given number z.
function DivisibleNumbers() {
    const z = document.getElementById("num4").value;
    let nums = "";
    for (let i = 1; i <= 100; i++) {
        if ((i % z) === 0) {
            if (nums === "") {
                nums = i.toString();
            } 
            else {
                nums += ", " + i;
            }
        }
    }
    document.getElementById("answer4").innerHTML = "Answer: " + nums;
}