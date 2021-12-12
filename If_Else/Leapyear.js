var prompt=require('prompt-sync')();
year = prompt("Input a Year : ");

if (year % 4 !== 0 && year % 400 !== 0)
 {

console.log(year + " is not a leap year. Sorry bruh.");

} 
else if (year % 100 !== 0)
{

console.log(year + " is a leap year, awsum!");

} 
else 
{

console.log(year + " it is indeed a leap year!");

}
