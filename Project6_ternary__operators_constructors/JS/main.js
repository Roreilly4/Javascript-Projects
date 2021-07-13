//Tenary operator
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + ' to ride';
}
//constructor function that uses the “new” and “this” keywords
function Rider(Name, Age, Height) {
    this.Riders_Name = Name;
    this.Riders_Age = Age;
    this.Riders_Height = Height;
}

var Ross = new Rider("Ross OReilly", 35, 85);
var Lynne = new Rider("Lynne Coady", 36, 63);
var Eli = new Rider("Eli OReilly", 7, 50);

function myFunction() {
    document.getElementById("New_and_This").innerHTML = Eli.Riders_Name + Eli.Riders_Age + " years old, but he is only " + Eli.Riders_Height + "cm tall.";
}
// Nested Function
document.getElementById("Counting").innerHTML = Count();

function Count() {
    var Starting_point = 10;

    function Plus_one() { Starting_point += 1; }
    Plus_one();
    return Starting_point;
}