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

class PasswordGenerator {
    constructor()
    {
        this.characters = 8;
        this.generateNumbers = true;
        this.generateCharactersLowercase = true;
        this.generateCharactersUppercase = true;
        this.generateSymbols = true;
        this.Generate = generate.bind(this);
    }
}

const pswdGenerator = new PasswordGenerator();
const checkboxes = ["#option_gen_numbers", "#option_gen_symbols", "#option_gen_lowercase", "#option_gen_uppercase"];
let checked = 4;

function generatePassword(length)
{
    if(length != null) 
    {
        pswdGenerator.characters = length;
    }
    let pswd = pswdGenerator.Generate();
    $("#output_password").val(pswd);
}

function changeChecked(checkboxID)
{
    let unchecked = 0;
    for(let i=0; i < 4; i++)
    {
        if(!$(checkboxes[i]).prop('checked'))
        {
            unchecked++;
        }
    }
    if(unchecked == 4)
    {
        // $(checkboxID).attr("disabled", true);
        $(checkboxID).prop('checked', true);
    }
}

$(document).ready(function() {
    generatePassword(8);

    // Prevent a form submision
    $("input[type='number']").on('keydown', function (e) {
        if (e.keyCode === 13) {
            e.preventDefault();
            return false;
        }
    });

    $("#generate_password").click(function() 
    {
        pswd = pswdGenerator.Generate();
        $("#output_password").val(pswd);
    });

    $("#number_character").change(function() 
    {
        if($("#number_character").val() > 50)
        {
            pswdGenerator.characters = 50;
            $("#number_character").val(50);
        }
        generatePassword($("#number_character").val());
        $("#range_character").val($("#number_character").val());
    });
    $("#range_character").change(function() 
    {
        generatePassword($("#range_character").val());
        $("#number_character").val($("#range_character").val());
    });
    $("#option_gen_numbers").change(function() 
    {
        changeChecked("#option_gen_numbers");
        pswdGenerator.generateNumbers = $("#option_gen_numbers").prop('checked');
        generatePassword();
    })
    $("#option_gen_symbols").change(function() 
    {
        changeChecked("#option_gen_symbols");
        pswdGenerator.generateSymbols = $("#option_gen_symbols").prop('checked');
        generatePassword();
    })
    $("#option_gen_lowercase").change(function() 
    {
        changeChecked("#option_gen_lowercase");
        pswdGenerator.generateCharactersLowercase = $("#option_gen_lowercase").prop('checked');
        generatePassword();
    })
    $("#option_gen_uppercase").change(function() 
    {
        changeChecked("#option_gen_uppercase");
        pswdGenerator.generateCharactersUppercase = $("#option_gen_uppercase").prop('checked');
        generatePassword();
    })
});