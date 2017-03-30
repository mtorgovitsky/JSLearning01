﻿////new string escapoe character
//document.write("Learning JavaScript :)")
//alert("Learning JavaScript \
//again");

var jSonObject = [
    {
        "firstName": "Michael",
        "lastName": "Torgovitsky"
    },
    {
        "firstName": "First Name",
        "lastName": "Last Name"
    }
];

var jsonString = JSON.stringify(jSonObject);
console.log(jsonString);

var jsonSerialize = JSON.parse(jsonString);
console.log(jsonSerialize);

function addLI() {
    var li = document.createElement("li");
    li.id = "roomC";
    li.textContent = "Room C";
    var list = document.getElementById("roomsList");
    list.appendChild(li);
}

function removeID() {
    var tmpLI = document.getElementById("roomC");
    tmpLI.removeAttribute("id");
}

function addID() {
    var liItems = document.getElementsByTagName("li");
    for (var i = 0; i < liItems.length; i++) {
        if (liItems[i].textContent === "Room C") {
            liItems[i].setAttribute("id", "roomC");
        }
    }
}

function removeLI() {
    var list = document.getElementById("roomsList");
    var li = document.getElementById("roomC");
    list.removeChild(li);
}