import PasswordGenerator from './PasswordGenerator.js';

const pswdGenerator = new PasswordGenerator();
const checkboxes = ["#option_gen_numbers", "#option_gen_symbols", "#option_gen_lowercase", "#option_gen_uppercase"];
let pswd = "";

function generatePassword(length)
{
    if(length != null) 
    {
        pswdGenerator.characters = length;
    }
    pswd = pswdGenerator.Generate();
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
        console.log("Before setting password value: " + pswd);
        $("#output_password").val(pswd);
        console.log("After setting password value: " + $("#output_password").val());
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