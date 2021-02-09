/**
 * toggles the drop down menu on mobile
*/
function toggleDropDownMenu(){
    let menu = document.getElementById("myLinks");

    if(menu.style.display == "block"){
        menu.style.display = "none";
    }
    else{
        menu.style.display = "block";
        
    }
}



let alertDialog = document.getElementById("alertDialog");

let nameField = document.getElementById("nameField");
let emailField = document.getElementById("emailField");
let subjectField = document.getElementById("subjectField");
let messageField = document.getElementById("messageField");

let nameFieldError = document.getElementById("nameErrorMessage");
let emailFieldError = document.getElementById("emailErrorMessage");
let subjectFieldError = document.getElementById("subjectErrorMessage");
let messageFieldError = document.getElementById("messageErrorMessage");

/*adds event listeners to each input field to see whether or not they have been filled in order to turn off the error message on the form.*/
nameField.addEventListener("keyup", (event)=>{
    if(nameField.value != "")
    {
        nameFieldError.style.display = "none";
    }
});

emailField.addEventListener("keyup", (event) =>{
    if(validEmailFormat(emailField.value))
    {
        emailFieldError.style.display = "none";
    }
});

subjectField.addEventListener("keyup", (event)=>{
    if(subjectField.value != "")
    {
        subjectFieldError.style.display = "none";
    }
});

messageField.addEventListener("keyup", (event) =>{
    if(messageField.value != "")
    {
        messageFieldError.style.display = "none";
    }
});




/**
 * when submit button is clicked
 * will take the input from each of the form's field and store it within an object, and print the input onto the console.
 * 
 * will also display an alert dialog if all parts of the form has been filled, if not the form will not submit.
 */
function submitButtonAction(){
    

    if(formValidation(nameField.value, emailField.value, subjectField.value, messageField.value))
    {
        console.log(`${nameField.value}, ${emailField.value}, ${subjectField.value}, ${messageField.value}`);

        //experimenting with objects
        /*let person = {
            'name': nameField,
            'email': emailField,
            'subject': subjectField
        };
    
        console.log(person.name);*/
        alertDialog.style.display = "block";

        return true;
    }
    
    return false;
  
}

/**
 * turns the alert dialog off 
 */
function dismissDialog(){
    alertDialog.style.display = "none";
}

//makes it so when the user clicks anywhere else on the screen the alert dialogue will close.
window.onclick = (event) =>{
    
    if(event.target == alertDialog)
        dismissDialog();
}

/**
 * will check to see if all parts of the form has been filled out and if no fields have been left empty.
 * if any of the fields have been left empty when submitting the form an error will display showing which field(s) needs to be filled.
 * @param {*} nameFieldValue string from name field
 * @param {*} emailFieldValue string from email field
 * @param {*} subjectFieldValue string from subject field
 * @param {*} messageFieldValue string from message field
 * @returns will return true if all fields have been filled, false if not
 */
function formValidation(nameFieldValue, emailFieldValue, subjectFieldValue, messageFieldValue){
    let bool = true;
    
    if(nameFieldValue == "")
    {
       nameFieldError.style.display = "block";
        bool = false;
    }

    if(!validEmailFormat(emailFieldValue))
    {
        emailFieldError.style.display = "block";
        bool = false;
    }

    if(subjectFieldValue == "")
    {
        subjectFieldError.style.display = "block";
        bool = false;
    }

    if(messageFieldValue == "")
    {
        messageFieldError.style.display = "block";
        bool = false;
    }

    return bool;
}

/**
 * Checks to see if the value passed through is an email addresses with the correct formatting e.x something@emailclient.com. 
 * 
 * @param {*} emailFieldValue the email address to be checked 
 */
function validEmailFormat(emailFieldValue){
    if(emailFieldValue !="")
    {
        return true;
    }

    return false;
}