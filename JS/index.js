const symbolArray = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]","|","\\",":",";","\"","'","<",",",">",".","?","/"];

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function insertCharacter(str, char, pos)
{
    return str.slice(0, pos) + char + str.slice(pos);
}

function generate() {
    let passwordString = "";
    let num = 0;
  
    for (let c = 0; c < this.characters; c++) {
        let randomValue = getRndInteger(1, 4);
        let charType;
        
        // Re-visit this in future
        if (this.generateNumbers && this.generateCharactersUpperCase && this.generateCharactersLowerCase && this.generateSymbols) {
            if (randomValue == 1) {
                charType = "numbers";
            } else if (randomValue == 2) {
                charType = "upperCaseCharacter";
            } else if (randomValue == 3) {
                charType = "lowerCaseCharacter";
            } else {
                charType = "symbols";
            }
        } else if (this.generateNumbers && this.generateCharactersUpperCase && this.generateCharactersLowerCase) {
            if (randomValue == 1) {
                charType = "numbers";
            } else if (randomValue == 2) {
                charType = "upperCaseCharacter";
            } else {
                charType = "lowerCaseCharacter";
            }
        } else if (this.generateNumbers && this.generateCharactersUpperCase && this.generateSymbols) {
            if (randomValue == 1) {
                charType = "numbers";
            } else if (randomValue == 2) {
                charType = "upperCaseCharacter";
            } else {
                charType = "symbols";
            }
        } else if (this.generateNumbers && this.generateCharactersLowerCase && this.generateSymbols) {
            if (randomValue == 1) {
                charType = "numbers";
            } else if (randomValue == 2) {
                charType = "lowerCaseCharacter";
            } else {
                charType = "symbols";
            }
        } else if (this.generateCharactersUpperCase && this.generateCharactersLowerCase && this.generateSymbols) {
            if (randomValue == 1) {
                charType = "upperCaseCharacter";
            } else if (randomValue == 2) {
                charType = "lowerCaseCharacter";
            } else {
                charType = "symbols";
            }
        } else if (this.generateNumbers && this.generateCharactersUpperCase) {
            charType = randomValue == 1 ? "numbers" : "upperCaseCharacter";
        } else if (this.generateNumbers && this.generateCharactersLowerCase) {
            charType = randomValue == 1 ? "numbers" : "lowerCaseCharacter";
        } else if (this.generateNumbers && this.generateSymbols) {
            charType = randomValue == 1 ? "numbers" : "symbols";
        } else if (this.generateCharactersUpperCase && this.generateCharactersLowerCase) {
            charType = randomValue == 1 ? "upperCaseCharacter" : "lowerCaseCharacter";
        } else if (this.generateCharactersUpperCase && this.generateSymbols) {
            charType = randomValue == 1 ? "upperCaseCharacter" : "symbols";
        } else if (this.generateCharactersLowerCase && this.generateSymbols) {
            charType = randomValue == 1 ? "lowerCaseCharacter" : "symbols";
        } else if (this.generateNumbers) {
            charType = "numbers";
        } else if (this.generateCharactersUpperCase) {
            charType = "upperCaseCharacter";
        } else if (this.generateCharactersLowerCase) {
            charType = "lowerCaseCharacter";
        } else if (this.generateSymbols) {
            charType = "symbols";
        }
        //console.log(charType);
        switch (charType) {
            case "numbers":
                num = getRndInteger(0, 9);
                passwordString = insertCharacter(passwordString, num, c);
                break;
            case "lowerCaseCharacter":
                num = getRndInteger(97, 122);
                passwordString = insertCharacter(passwordString, String.fromCharCode(num), c);
                break;
            case "upperCaseCharacter":
                num = getRndInteger(65, 90);
                passwordString = insertCharacter(passwordString, String.fromCharCode(num), c);
                break;
            case "symbols":
                passwordString = insertCharacter(passwordString, symbolArray[getRndInteger(0, symbolArray.length-1)], c);
                break;
        }
    }
    return passwordString;
}

class PasswordGenerator {
    constructor()
    {
        this.characters = 8;
        this.generateNumbers = true;
        this.generateCharactersLowerCase = true;
        this.generateCharactersUpperCase = true;
        this.generateSymbols = true;
        this.Generate = generate.bind(this);
    }
}

const pswdGenerator = new PasswordGenerator();
pswdGenerator.characters = 8;
alert(pswdGenerator.Generate());

$(document).ready(function()
{
    $("#generate_password").click(function()
    {
        $("#generate_password").hide();
    })
})