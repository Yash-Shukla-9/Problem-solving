let inputval = document.getElementById("in");
let undo = document.querySelector(".undo");
let redo = document.querySelector(".redo");

let arr = [];
let store = inputval.value;
arr.push(store);

undo.addEventListener("click", () => {

    if (arr.length > 0) {
        let popval = arr.pop();
    }
})

redo.addEventListener("click", () => {

    if (arr.length < 0) {


    }

})



