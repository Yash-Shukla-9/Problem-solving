
const runLoopInReverse = (num) => {
    for (let i = num; i > 0; i--) {
        console.log(i);
    }
};

const runLoopInReverseUsingRecusrion = (num) => {
    const iterateNumer = (i) => {
        console.log(i);
        if (i !== 0) {
            num--;
            iterateNumer(num);
        }
    };

    iterateNumer(num);
};

// runLoopInReverseUsingRecusrion(10);


//TODO: Print even number using recusrion


const EvenRecursion = (num) => {
    const itrate = (j) => {
        if (j % 2 === 0)
            console.log(j);

        if (j > 0)
            itrate(j - 1);
    }
    itrate(num)
}
// EvenRecursion(10);


//TODO: Print reverise string using recusrion


function ReverseStr(str) {

    // let reverse = "";
    // for (let i = str.length - 1; i >= 0; i--) {
    //     reverse += str[i]
    // }
    // return reverse;




}

const re = ReverseStr("helo");
console.log(re);



const flatArrayV1 = (arr) => {
    // const result = arr.flat(); // Not working for nested
    const result = arr.flat(Infinity);
    return result;
};

const flatArrayV2 = (arr) => {
    const cpArr = [...arr];
    const result = [];

    const flatArray = (inputArr) => {
        for (let i = 0; i < inputArr.length; i++) {
            const currentElem = inputArr[i];
            if (!Array.isArray(currentElem)) {
                result.push(currentElem);
                continue;
            }

            flatArray(currentElem);
        }
    };

    flatArray(cpArr);

    return result;
};

//   console.log(flatArrayV2([1, 2, [1, 2], [1, 2, [1, 2]], 3]));
1  