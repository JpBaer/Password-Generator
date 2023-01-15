// Assignment Code
// When Button is Clicked
// A series of prompts is added to create password criteria
// Based on this criteria a password is created and shown in the window

//Create arrays for each form of criteria 
//Create an empty array where the password will be generated
//if a criteria is selected append the array for that criteria into the main characters array


//Defining different character arrays
var characters = [];
var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var num = ['0','1','2','3','4','5','6','7','8','9'];
var special = ['!','@','#','$','%','^','&','*','(',')','?','<','>','[',']','/','~'];




var generateBtn = document.querySelector("#generate");


function generatePassword(){
  //4 variables for different criteria

  //Password Length prompt - needs to be converted from string to num
  var passwordLength = parseInt(window.prompt('How long do you want your password? (min 8 and max 128)'));
  

  if(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128 ){
    window.alert('Password needs to be between 8 and 128 characters')
  }

//Lowercase letters prompt
  var lower = window.prompt('Do you want lowercase letters? (Yes or No)').toLowerCase();
// Sanity checks to make sure a proper input was given
    if(lower !='yes' && lower !='no'){
      window.alert('Incorrect input');
    }
//Special Character Prompt
  var specialChar = window.prompt('Do you want special characters? (Yes or No)').toLowerCase();
    
     if(specialChar !='yes' && specialChar !='no'){
       window.alert('Incorrect input');
      }
//Capital Letters Prompt
  var caps = window.prompt('Do you want capital letters? (Yes or No)').toLowerCase();

      if(caps !='yes' && caps !='no'){
        window.alert('Incorrect input');
      }
//Numbers prompt
  var numbers = window.prompt('Do you want numbers? (Yes or No)').toLowerCase();

      if(numbers !='yes' && numbers !='no'){
        window.alert('Incorrect input');
      }
    


 //Populate characters array depending on which criteria was selected     

  if(lower === 'yes'){
   characters = characters.concat(lowercase);
  }    

  if(caps === 'yes'){
    characters = characters.concat(uppercase);
  }

  if(numbers === 'yes'){
    characters = characters.concat(num);
  }

  if(specialChar === 'yes'){
    characters = characters.concat(special);  
  }

  if(lower === 'no' && caps === 'no' && numbers === 'no' && specialChar === 'no'){
    window.alert('A character criteria needs to be selected')
  }

// Generate password by iterating through the length of the password and appending random character to password array
  var passwordArray = [];
  for(var i = 0; i < passwordLength; i++){
      var randomIndex = Math.floor(Math.random() * characters.length);
      passwordArray.push(characters[randomIndex]);
  } 

  // Joins each element of password array into single string
  var randomPassword = passwordArray.join('');
  return randomPassword;
}
// Write password to the #password input
function writePassword() {

  // writePassword function calls generatePassword function
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

// Resets characters array so that you can run generator multiple times
  characters = [];
}

// Add event listener to generate button

// When button is clicked writePassword function is called 

generateBtn.addEventListener("click", writePassword);
