//While loop using let keyword
let text = "";
let i = 0;
while (i < 10) {
    text += "<br>The number is " + i;
    i++;
}
document.getElementById("while").innerHTML = text;

//For loop
const cars = ["BMW", "Volvo", "Saab", "Ford"];
let a = 0;
let text1 = "";
for (; cars[a];) {
    text1 += cars[a] + "<br>";
    a++;
}
document.getElementById("for").innerHTML = text1;

//Array
function dog_pics() {
    var Dog_Picture = [];
    Dog_Picture[0] = "sleeping";
    Dog_Picture[1] = "playing";
    Dog_Picture[2] = "eating";
    Dog_Picture[3] = "barking";
    document.getElementById("Dog").innerHTML = "In this picture, the dog is " +
        Dog_Picture[3] + ".";
}