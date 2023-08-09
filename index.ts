// //  - Write a program to convert the temperature from Celsius to Fahrenheit and vice verse.
// Celsius (°C) = (Temperature in degrees Fahrenheit (°F) - 32) * 5/9
var Fahrenheit: number = 102;
var celsius: number = (Fahrenheit) - 32 * 5 / 9;
var result: number = celsius;
console.log("celsius =", result);


// Temperature in degrees Fahrenheit (°F) = (Temperature in degrees Celsius (°C) * 9/5) + 32
var celsius: number = 84.22222222222223;
var Fahrenheit: number = (celsius * 9 / 5) + 32;
var result: number = Fahrenheit;
console.log("Fahrenheit =", result);


// // Write a program that calculates the percentage.


var givenNumber: number = 804;
var totalNumber: number = 1100;
var percentage: number = (givenNumber / totalNumber) * 100;
console.log("percentage=", percentage);

// Write a program that converts given number of days in
//  to weeks and days such as 17 days = 2 weeks and 3 days.



function museebat
(days: number): string 
{
    var week = Math.floor(days / 7);
    var remainingDays = days % 7;

   var result = '';
    if (week > 0) {
        result += `${week} week${week > 1 ? 's' : ''}`;
    }

    if (remainingDays > 0) {
        if (week > 0) {
            result += ' and ';
        }
        result += `${remainingDays} day${remainingDays > 1 ? 's' : ''}`;
    }

    return result;
}

var inputDays = 8;
var solution = museebat(inputDays);
console.log(`${inputDays} days = ${solution}`);



//Write a program that calculates the discount for a product based on its price. 
// If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.


function discountOffer(price: number) {

    var discountAmount = price / 100 * 10;

    if (price >= 100) {
        discountAmount = price / 100 * 10;
    } else if (price < 100) {
        discountAmount = (price / 100 * 5);
    }
    return discountAmount;
}
var price: number = 200;
var ans = discountOffer(price);
console.log(ans);

// Create a program that determines the category of a user-provided age. If the age is between 0 and 12, print "Child."
//  If it's between 13 and 19, print "Teenager." 

var age: number = 82;

if (age > 0 && age <= 12) {
    console.log("child.");

}
else if (age >= 13 && age <= 19) {
    console.log("teenager.")
}
else {
    console.log("adult")
}


// Write a program that takes temperature and check it. If it is cold 
// then suggest the user to wear warm clothes and so on according to the weather.


var tempreture: number = -5
var  suggest: string = "it's cold outside wear warm cloth."
var suggest1: string = "it's a harsh weather outside read cautions before before going outside."
var suggest2: string = "warm weather today, enjoy the day at beach. "
var suggest3: string = "today is hot wear light cloths and drink plenty of water."
if (tempreture <= 23 && tempreture >= 1) {
    console.log(suggest);
}
else if (tempreture <= 0) {
    console.log(suggest1);

}
else if (tempreture >= 24 && tempreture <= 30) {
    console.log(suggest2);
}
else {
    console.log(suggest3);
}


// Write a program that checks if the given number is  divisible by 3 or 5 or both
//  or not divisible by anyone show output accordingly.

var givenNumber:number = 113
var output: string = `${givenNumber} is divisible by 3.`;
var output1: string = `${givenNumber} is not divisible by 3.`;
var output2: string = `${givenNumber} is divisible by 5."`;
var output3: string = `${givenNumber} is not divisible by 5.`;
var output4: string = `${givenNumber} is divisible by both 3 & 5.`;
var output5: string = `${givenNumber} is not divisible by both 3 & 5.`;


{
if (givenNumber%3==0){
    console.log(output);
}
else if (givenNumber%3>=1 ){
    console.log(output1);
}
}
{
 if (givenNumber%5==0){
    console.log(output2);
}
else if (givenNumber%5>=1){
    console.log(output3);
}
}
 if (givenNumber%3==0 && givenNumber%5==0){
    console.log(output4)
}
else if (givenNumber%3>=1 && givenNumber%5>=1){
   console.log(output5)
}


//Write a program that checks if the given year is leap year or no

var givenYear:number = 2023;
var answer:string = `${givenYear} is leap year.`
var answer1:string = `${givenYear} is not leap year.`
if (givenYear%4 !==0 && givenYear%200 !==0 && givenYear%400 !==0){
    console.log(answer1)

}
else{
    console.log(answer)
}

//  Develop a program that determines the day of the week. Ask the user for a number (1-7) 
// and use nested if statements to print the corresponding day's name.

var dayNumber:number = 4
if (dayNumber==1){
    console.log("Monday");
}
else if (dayNumber==2){
    console.log("Tuesday");
}
else if (dayNumber==3){
    console.log("Wednesday");
}
else if (dayNumber==4){
    console.log("Thursday");
}
else if (dayNumber==5){
    console.log("Friday");
}
else if (dayNumber==6){
    console.log("Saturday");
}
else if (dayNumber==7){
    console.log("Sunday");
}
else{
    console.log("Given number is not valid.")
}


// Write a program that takes the number of units consumed by a user if it is greater
//  than 100 then add 10% tax if greater than 200 then add 15% of tax so on up to if greater than 500 then add 25% of tax
// Where the tax amount will be calculated by the amount of bill


var bill:number = 500
var tax:number = 10
var tax1:number = 15
var tax2:number = 25

var taxAmount =(bill/100)*tax
var taxAmount1 =(bill/100)*tax1
var taxAmount2 =(bill/100)*tax2

if (bill>=100 && bill<=199){
    console.log(taxAmount + bill)
}
else if(bill>=200 && bill<=499){
    console.log(taxAmount1 + bill)
}
else{
    console.log(taxAmount2 + bill)
}