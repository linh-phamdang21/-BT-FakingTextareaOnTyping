let string = "I am so stupid";
let arr = [];
let count = -1;
let output = "";
for (let i = 0; i < string.length; i++) {
    arr.push(string[i]);
}

function inputText() {
    count+=1;
    output+=arr[count];
    if (count === arr.length){
        count = -1;
        output = "";
    }
    document.getElementById("inputtext").value = "";
    document.getElementById("inputtext").value = output;
}