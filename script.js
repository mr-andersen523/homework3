





//generate random password


function generate(){

    //set password length/complexity
    let complexity = document.getElementById("customRange1").value;

    //values for password
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

    let password = "";

    //create for loop to choose password characters
    for(var i = 0; i <= complexity; i++){
        password = password + characters.charAt(Math.floor(Math.random() * Math.floor(characters.length - 1)));
    }

    //add password to textbox/display area
    document.getElementById("display").value = password;

    //add password to previously generated passwords section
    document.getElementById("lastNums").innerHTML += password + "<br/>";

}

//set default length display of 25
document.getElementById("length").innerHTML = "Length: 8";

//function to set length based on slider position
document.getElementById("customRange1").oninput = function(){

    if(document.getElementById("customRange1").value > 0){
        document.getElementById("length").innerHTML = "Length: " + document.getElementById("customRange1").value;
    }
    else{
        document.getElementById("length").innerHTML = "Length: 8";
    }

}

//function to copy password to clipboard
function copyPassword(){

    document.getElementById("display").select();

    document.execCommand("btn btn-secondary");

    alert("Password copied to clipboard!");

}

