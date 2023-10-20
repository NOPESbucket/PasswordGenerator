const symbolArray = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", "|", "\\", ":", ";", "\"", "'", "<", ",", ">", ".", "?", "/"];

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function insertCharacter(str, char, pos) {
    return str.slice(0, pos) + char + str.slice(pos);
}

function generate() {
    let passwordString = "";
    let num = 0;
  
    for (let c = 0; c < this.characters; c++) {
        let randomValue = getRndInteger(1, 4);
        let charType;
        
        // Re-visit this code in future
        if (this.generateNumbers && this.generateCharactersUppercase && this.generateCharactersLowercase && this.generateSymbols) {
            if (randomValue == 1) {
                charType = "numbers";
            } else if (randomValue == 2) {
                charType = "upperCaseCharacter";
            } else if (randomValue == 3) {
                charType = "lowerCaseCharacter";
            } else {
                charType = "symbols";
            }
        } else if (this.generateNumbers && this.generateCharactersUppercase && this.generateCharactersLowercase) {
            if (randomValue == 1) {
                charType = "numbers";
            } else if (randomValue == 2) {
                charType = "upperCaseCharacter";
            } else {
                charType = "lowerCaseCharacter";
            }
        } else if (this.generateNumbers && this.generateCharactersUppercase && this.generateSymbols) {
            if (randomValue == 1) {
                charType = "numbers";
            } else if (randomValue == 2) {
                charType = "upperCaseCharacter";
            } else {
                charType = "symbols";
            }
        } else if (this.generateNumbers && this.generateCharactersLowercase && this.generateSymbols) {
            if (randomValue == 1) {
                charType = "numbers";
            } else if (randomValue == 2) {
                charType = "lowerCaseCharacter";
            } else {
                charType = "symbols";
            }
        } else if (this.generateCharactersUppercase && this.generateCharactersLowercase && this.generateSymbols) {
            if (randomValue == 1) {
                charType = "upperCaseCharacter";
            } else if (randomValue == 2) {
                charType = "lowerCaseCharacter";
            } else {
                charType = "symbols";
            }
        } else if (this.generateNumbers && this.generateCharactersUppercase) {
            charType = randomValue == 1 ? "numbers" : "upperCaseCharacter";
        } else if (this.generateNumbers && this.generateCharactersLowercase) {
            charType = randomValue == 1 ? "numbers" : "lowerCaseCharacter";
        } else if (this.generateNumbers && this.generateSymbols) {
            charType = randomValue == 1 ? "numbers" : "symbols";
        } else if (this.generateCharactersUppercase && this.generateCharactersLowercase) {
            charType = randomValue == 1 ? "upperCaseCharacter" : "lowerCaseCharacter";
        } else if (this.generateCharactersUppercase && this.generateSymbols) {
            charType = randomValue == 1 ? "upperCaseCharacter" : "symbols";
        } else if (this.generateCharactersLowercase && this.generateSymbols) {
            charType = randomValue == 1 ? "lowerCaseCharacter" : "symbols";
        } else if (this.generateNumbers) {
            charType = "numbers";
        } else if (this.generateCharactersUppercase) {
            charType = "upperCaseCharacter";
        } else if (this.generateCharactersLowercase) {
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

export default class PasswordGenerator {
    constructor() {
        this.characters = 8;
        this.generateNumbers = true;
        this.generateCharactersLowercase = true;
        this.generateCharactersUppercase = true;
        this.generateSymbols = true;
    }

    Generate() {
        return generate.call(this);
    }
}