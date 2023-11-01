console.log("Hello World!");

let array = ["red" , "green" , "blue" , "yellow" , "pink" , "deeppink"];

let runningList = $(".middle_box");

const indexing = () => {
    for (let i = 0; i < runningList.length; i++) {
        runningList.eq(i).css("background" , array[i]);
    }

    array.unshift(array.pop());
}
setInterval(indexing , 500);