// Friday ES6 in class coding assignment.  Please copy and paste your code into the text-box.
 

// //1 Convert the following function into an arrow function named "arrowMyFunction".
// const myFunction = function (num1, num2) {
//       return num1 + num2;
// };

const myFunction= (num1, num2) => {return num1 + num2}
console.log(myFunction(10,15) ) 


// //2 Convert the following function into a one-lined arrow function without a return statement (the return is implicit) . Name the function arrowAdd100
// const add100 = function (money) {
//      return money + 100;
// };
 
 const arrowAdd100= money => money + 100
 console.log(arrowAdd100(500))
 
// //3 Create an arrow function that takes TWO arguments, a string and a single letter.  The function will count the number of times the specified letter occurs in the string. **Not case sensitive
// Examples:
// countLetters('Hello my name is John', 'i') returns 1
// countLetters('Hello my name is John', 'h') returns 2
// countLetters('We love this city a lot, sometimes', 'e') returns 4
 


arrowCountLetter=(str, letter)=> {
    let count=0
    for(let i= 0; i < str.length; i++)
    { if(str.charAt(i)== letter)
        count++
    }
    return count
}

console.log(arrowCountLetter("Peter piper pickled pepper","p"))