//Creating a dictionary for the object Charactors 
var Characters = {
    //Adding Key: Value pairs
    Name: 'Arrow',
    Age: 35,
    Weapon: 'bow',
    Location: 'Star-City',
};
//Deleting the key:value pair Age
delete Characters.Age;
//Displaying the result in Html document
document.getElementById('Dictionary').innerHTML = Characters.Age;