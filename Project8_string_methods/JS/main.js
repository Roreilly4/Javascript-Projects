// using the concat()method
function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = " into a complete ";
    var part_4 = "sentence";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}
// using the slice() method
function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy!";
    var Section = Sentence.slice(27, 33);
    document.getElementById("Slice").innerHTML = Section;
}
// sting to UPPERCASE method
var str = "hi how are you!";
str.toUpperCase();
// using the text search method
var text = "Hi hows the weather today";
var n = text.search("today");
document.getElementById("demo").innerHtml = n;
// numbers to a string method
function string_Method() {
    var X = 182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}
// using the percision
function percision_Method() {
    var B = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = B.toPrecision(10);
}
// using the toFixed() method
var A = 9.656;
document.getElementById("demo1").innerHTML = A.toFixed(2);
// using the valueof() method 
var C = 123;
document.getElementById("demo2").innerHTML = C.valueOf();