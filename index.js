/*
Write a function named  capitalizeWords that takes a string (sentence) as input and returns 
a new string where the first letter of each word is capitalized.
*/
const capitalizeWords = (sentence) =>{
 //write your solution here 
 let newSentence = sentence[0].toUpperCase();

 for (let i = 1; i < sentence.length; i++) {
    if (sentence[i] === ' ') {
        newSentence += sentence[i] + sentence[i + 1].toUpperCase();
        i++;
        continue;
    } newSentence += sentence[i];
 } return newSentence;
}

console.log(capitalizeWords("hello world from javascript"));
// → "Hello World From Javascript"

capitalizeWords("javaScript");
// → "JavaScript"
