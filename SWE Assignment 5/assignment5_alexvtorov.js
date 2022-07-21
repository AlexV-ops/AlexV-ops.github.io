/* Question A */
let Lucas_height=1.69;
let Peter_height=1.95;
let Lucas_weight=78;
let Peter_weight=92;

let Lucas_BMI=Lucas_weight/(Lucas_height**2);
let Lucas_BMI_clean=Math.round(Lucas_BMI);
let Peter_BMI=Peter_weight/(Peter_height**2);
let Peter_BMI_clean=Math.round(Peter_BMI);

lucasHigherBMI=Lucas_BMI>Peter_BMI;
console.log("Question A");
console.log(`Peter's BMI is approximately ${Peter_BMI_clean}, and Lucas' BMI is approximately ${Lucas_BMI_clean}. Lucas' BMI is higher than Peter's BMI: ${lucasHigherBMI}.`);

/* Question B */
let c_temp1=27;
let f_temp1=(c_temp1 * 9/5)+32;
let f_temp1_clean=Math.round(f_temp1);
console.log("Question B");
console.log(`${c_temp1} degrees Celsius is around ${f_temp1_clean} degrees Fahrenheit.`);

let f_temp2=823;
let c_temp2=(f_temp2-32)*(5/9);
let c_temp2_clean=Math.round(c_temp2);
console.log(`${f_temp2} degrees Fahrenheit is around ${c_temp2_clean} degrees Celsius.`);

/* Question C */
if (Lucas_BMI > Peter_BMI) {
    BMI_result=`Lucas' BMI (${Lucas_BMI_clean}) is higher than Peter's BMI (${Peter_BMI_clean})!`;
} else {
    BMI_result=`Peter's BMI (${Peter_BMI_clean}) is higher than Lucas' BMI (${Lucas_BMI_clean})!`;
}
console.log("Question C");
console.log(BMI_result);

/* Question D */
const input = prompt("Enter 1 for Fahrenheit to Celsius, enter 2 for Celsius to Fahrenheit.");
let degree_choice = input;
const input2 = prompt("How many degrees would you like to convert?");
let degree_choice_number = input2;
if (degree_choice == 1) {
    function ConvertFahrenheitToCelsius(degree_choice_number){
        return (degree_choice_number-32)*(5/9);
    }
    alert(ConvertFahrenheitToCelsius(degree_choice_number) + " is your Celsius value.");
}
else if (degree_choice == 2) {
    function ConvertCelsiusToFahrenheit(degree_choice_number){
        return (degree_choice_number*(9/5)+32);
    }
    alert(ConvertCelsiusToFahrenheit(degree_choice_number) + " is your Fahrenheit value.");
}
else {
    alert("Uh oh! You entered an incorrect result for either prompt 1 or 2; please reload and try again.");
}
console.log("Question D: Option 1 was completed with the alert functions that should have greeted you when you loaded the website; for option 2, please proceed with inputting your results here.");
function CTF(celsius){
    var celsius_temp=celsius;
    var CTFahrenheit = celsius_temp * (9/5) + 32;
    var message = celsius_temp + ` \xB0C is ` + CTFahrenheit + ` \xB0F.`;
        console.log(message);
}

function FTC(fahrenheit){
    var fahrenheit_temp=fahrenheit;
    var FTCelsius = (fahrenheit_temp - 32)*(5/9);
    var message2 = fahrenheit_temp + ` \xB0F is ` + FTCelsius + ` \xB0C.`;
        console.log(message2);
}

CTF(100);
CTF(0);
CTF(10);

FTC(32);
FTC(10);
FTC(102);