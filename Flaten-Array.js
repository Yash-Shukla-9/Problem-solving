let arr = [
    [1, 2],
    [3, 4],
    [5, [6, 7, 8], 9],
    [[[10, 11]], [[[12, 13]]], 14, 15]
];



// const result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// triverse each element using for loop 
// sort the array and save the result in am enmpty arry usinh push 



let res = [];

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        res.push(arr[i][j]);

    }
}

// console.log(res);


let arr2 = [1, [[[2, 3]]], 4, [[1, 2]], [3, 4, [3, 4]], 5];

// in this we have flaten netsted arry 

let check = [];
function flat(val) {
    for (let i = 0; i < val.length; i++) {

        if (!Array.isArray(val[i])) {
            check.push(val[i])
            console.log(val[i]);
        } else {
            flat(val[i])
        }
    }
}
flat(arr2)
console.log(check);

