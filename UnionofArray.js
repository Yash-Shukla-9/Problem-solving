// find  unique values only from 2 arrays i.e. union values
// const inputA = [1, 2, 3, 4, 5, 1];
// const inputB = [1, 2, 3, 4, 5, 1, 7, 6, 4, 3, 8];

// Output   ---- [ 1, 2, 3, 4, 5, 6, 7, 8]; 







const inputA = [1, 2, 3, 4, 5, 1];
const inputB = [1, 2, 3, 4, 5, 1, 7, 8];
// Output   ---- [ 1, 2, 3, 4, 5, 6, 7, 8]; 

let result = [];


function Resultval(val) {
    for (let i = 0; i < result.length; i++) {

        if (result[i] === val) {
            return true
        }
    }
    return false

}


for (let i = 0; i < inputA.length; i++) {

    if (!Resultval(inputA[i])) {
        result.push(inputA[i])
    }
}

for (let j = 0; j < inputB.length; j++) {

    if (!Resultval(inputB[j])) {
        result.push(inputB[j])
    }
}


console.log(result);
