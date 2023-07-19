// To find longest word from a string
// My name is ankit jain & i'm from morena

/*
use split the tsr 
then we have a long str = 0

go for loop an check to she str length 
now check long < str length
*/

let FindLongWord = (str) => {
  let stringg = str.split(" ");
  let long = 0;
  let longestWord = " ";
  for (let i = 0; i < stringg.length; i++) {
    if (long < stringg[i].length) {
      long = stringg[i].length;
      longestWord = stringg[i];
    }
  }
  return longestWord;
};

console.log(FindLongWord("My name is ankit jain & i'm from morena"));
