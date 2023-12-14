//this function makking all work and loading on body in html
function passwgenerator(){
    passwordLenght();
    randomPassword();
    randomPasswOutput()
    passwOutToText();
};


const capitalLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const smallLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "{", "}", "[", "]", ":", ";", "<", ">", ",", ".", "?", "/"];


let randomPasswordVoutput = [];


//slider and number input bonder

const passwordLenghtRange = document.getElementById("passwordLenghtRange");
const passwordLenghtNumber = document.getElementById("passwordLenghtNumber");

function updatEpasswordLenghtRange() {
    passwordLenghtRange.value = passwordLenghtNumber.value;
};

function updatEpasswordLenghtNumber() {
    passwordLenghtNumber.value = passwordLenghtRange.value;
};

passwordLenghtNumber.addEventListener("input", updatEpasswordLenghtRange);
passwordLenghtRange.addEventListener("input", updatEpasswordLenghtNumber);

//function to generate new password by clicking a button

function changeContent() {
    let passwordOutput0 = document.getElementById("passwordOutput");
    passwordOutput0.value = randomPasswordVoutput.join(""); 
    passwOutToText();
    passwgenerator()
};



// function to output password to text window
function passwOutToText(){
    
const passwordOutput1 = document.getElementById("passwordOutput");
passwordOutput1.value = randomPasswordVoutput.join("")
};

//check box value for cappiutal letters

let capitalLettersCheckboxvalue = true; //when change make sure to change it in html file

const capitalLettersCheckbox = document.querySelector("input[id=capitalLettersCheckbox]");

capitalLettersCheckbox.addEventListener("change", function() {
    if (this.checked) {
        capitalLettersCheckboxvalue = true;
        //console.log("Checkbox big letters = " + capitalLettersCheckboxvalue);

    } else {
        capitalLettersCheckboxvalue = false;
        //console.log("Checkbox big letters = " + capitalLettersCheckboxvalue);
    }
  });
  
//console.log("Checkbox big letters = " + capitalLettersCheckboxvalue);

//check box value for small letters

let smallLettersCheckboxValue = true; //when change make sure to change it in html file

const smallLettersCheckbox = document.querySelector("input[id=smallLettersCheckbox]");

smallLettersCheckbox.addEventListener("change", function() {
    if (this.checked) {
        smallLettersCheckboxValue = true;
        //console.log("Checkbox small letters = " + smallLettersCheckboxValue);
    } else {
        smallLettersCheckboxValue = false;
        //console.log("Checkbox small letters = " + smallLettersCheckboxValue);
    }
  });
  
    //console.log("Checkbox small letters = " + smallLettersCheckboxValue);

//check box value for numbers 

let numbersCheckboxValue = true; //when change make sure to change it in html file

const numbersCheckbox = document.querySelector("input[id=numbersCheckbox]");

numbersCheckbox.addEventListener("change", function() {
    if (this.checked) {
        numbersCheckboxValue = true;
        //console.log("Checkbox numbers = " + numbersCheckboxValue);

    } else {
        numbersCheckboxValue = false;
        //console.log("Checkbox numbers = " + numbersCheckboxValue);
    }
  });
  
//console.log("Checkbox numbers = " + numbersCheckboxValue);

//check box value for numbers for special characters

let specialCharactersCheckboxValue = false; //when change make sure to change it in html file

const specialCharactersCheckbox = document.querySelector("input[id=specialCharactersCheckbox]");

specialCharactersCheckbox.addEventListener("change", function() {
    if (this.checked) {
        specialCharactersCheckboxValue = true;
        //console.log("Checkbox special cahracters = " + specialCharactersCheckboxValue);

    } else {
        specialCharactersCheckboxValue = false;
        //console.log("heckbox special cahracters = " + specialCharactersCheckboxValue);
    }
  });

  //console.log("Checkbox special characters = " + specialCharactersCheckboxValue);

let randomPasswordV = [];
let passwLenghtValue = 12; //when change make sure to change it in html file

//this function checking witch boxes are checkd and assiging symbols randomly(random from each group) to array
function randomPassword() {
    randomPasswordV = []
    if (numbersCheckboxValue == true) {
        for (let i = 0; i < passwLenghtValue; i++){
            randomPasswordV.push(numbers[Math.floor(Math.random() * numbers.length)])
        } 
    } if (capitalLettersCheckboxvalue == true) {
        for (let i = 0; i < passwLenghtValue; i++){
            randomPasswordV.push(capitalLetters[Math.floor(Math.random() * capitalLetters.length)])
        }
    } if (smallLettersCheckboxValue == true) {
        for (let i = 0; i < passwLenghtValue; i++){
            randomPasswordV.push(smallLetters[Math.floor(Math.random() * smallLetters.length)])
        }
    }  if (specialCharactersCheckboxValue == true) {
        for (let i = 0; i < passwLenghtValue; i++){
            randomPasswordV.push(specialCharacters[Math.floor(Math.random() * specialCharacters.length)])
        }
    }
    
    //console.log("" + randomPasswordV)
};

//function to update password lenght and make it responsive

function passwordLenght() {
    passwLenghtValue = passwordLenghtNumber.value;
    
    //console.log("" + passwLenghtValue);
};

// proper random pasword lenght (proper randomized password)
function randomPasswOutput() {
    randomPasswordVoutput = []
    for (let i = 0; i < passwLenghtValue; i++){
    randomPasswordVoutput.push(randomPasswordV[Math.floor(Math.random() * randomPasswordV.length)])
    
}
    //console.log("" + randomPasswordVoutput)
};


//Event listiners 
//making code generator responsive

passwordLenghtNumber.addEventListener("input", passwgenerator) ;
passwordLenghtRange.addEventListener("input", passwgenerator)

numbersCheckbox.addEventListener("change", function() {
    if (this.checked) {
        passwgenerator()
    } else {
        passwgenerator()
    }
});

capitalLettersCheckbox.addEventListener("change", function() {
    if (this.checked) {
        passwgenerator()
    } else {
        passwgenerator()
    }
});

smallLettersCheckbox.addEventListener("change", function() {
    if (this.checked) {
        passwgenerator()
    } else {
        passwgenerator()
    }
});

specialCharactersCheckbox.addEventListener("change", function() {
    if (this.checked) {
        passwgenerator()
    } else {
        passwgenerator()
    }
});



