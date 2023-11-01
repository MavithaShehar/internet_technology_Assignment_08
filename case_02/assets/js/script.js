
console.log("Hello World!");

let array = ["red" , "green" , "blue" , "yellow" , "pink" , "deeppink"];

let runningList = $("body > div > div");

const indexing = () => {
    for (let i = 0; i < runningList.length; i++) {
        runningList.eq(i).css("background" , array[i]);
    }

    array.unshift(array.pop());
}

setInterval(indexing , 1000);