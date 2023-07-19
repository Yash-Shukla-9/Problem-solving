// To find longest word from a string
// My name is ankit jain & i'm from morena

/*
use split the tsr 
then we have a longstr = ""

go for loop an check to the str length 
crnt str.length > longstr.lenth 

*/

function find(str) {
  let sp = str.split(" ");

  let longstr = 0;
  let store = "";
  for (i = 0; i < sp.length; i++) {
    if (sp[i].length > longstr) {
      store = sp[i];
    }
  }
  return store;
}

console.log(find(" My name is ankit jain & i'm from morena"));
