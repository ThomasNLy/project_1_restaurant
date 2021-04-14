/**
 * @author Thomas Nguyen
 * This script controls how the form element will behave based on the inputs it recieves from the user,
 * if any fields are left empty on the form an error message will appear under the empty field. If all fields
 * are filled out when the user clicks the submit button a pop up modal will appear to indicate that the form 
 * has been submitted.
 * The information from each field will also be outputted onto browser's console.  
 */


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
        nameField.style.border = "0.01em solid grey";
    }
});

emailField.addEventListener("keyup", (event) =>{
    if(validEmailFormat(emailField.value))
    {
        emailFieldError.style.display = "none";
        emailField.style.border = "0.01em solid grey";
    }
});

subjectField.addEventListener("keyup", (event)=>{
    if(subjectField.value != "")
    {
        subjectFieldError.style.display = "none";
        subjectField.style.border = "0.01em solid grey";
    }
});

messageField.addEventListener("keyup", (event) =>{
    if(messageField.value != "")
    {
        messageFieldError.style.display = "none";
        messageField.style.border = "0.01em solid grey";
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
        /*
            will store the value of each field within a person object
         */
        let person = {
            'name': nameField.value,
            'email': emailField.value,
            'subject': subjectField.value,
            'message': messageField.value
        };
    
        //object properties are known as keys, similar to a map list
        for(let key in person){
            if(person.hasOwnProperty(key)){
                console.log(key + ":", person[key]);
            }
        }
        alertDialog.style.display = "block";
        alertDialog.classList.add("animateOverlayFadeIn");
        setTimeout(() => {
            alertDialog.classList.remove("animateOverlayFadeIn");
        }, 300);

        return true;
    }
    
    return false;
  
}



/**
 * turns the alert dialog off 
 */
function dismissDialog(){
    alertDialog.classList.add('animateOverlayFadeOut');
    setTimeout(() => {
        alertDialog.classList.remove('animateOverlayFadeOut');
        alertDialog.style.display = 'none';
    }, 300);
    
}

//makes it so when the user clicks anywhere else on the screen the alert dialogue will close.
window.onclick = (event) =>{
    
    if(event.target == alertDialog)
        dismissDialog();
}

/**
 * will check to see if all parts of the form has been filled out and if no fields have been left empty.
 * if any of the fields have been left empty when submitting the form an error will display showing which field(s) needs to be filled.
 * Along with the field's border becoming bold
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
        nameField.style.border = "0.1em solid black";
        nameFieldError.style.display = "block";
        bool = false;
    }

    if(!validEmailFormat(emailFieldValue))
    {
        emailField.style.border = "0.1em solid black";
        emailFieldError.style.display = "block";
        bool = false;
    }

    if(subjectFieldValue == "")
    {
        subjectField.style.border = "0.1em solid black";
        subjectFieldError.style.display = "block";
        bool = false;
    }

    if(messageFieldValue == "")
    {
        messageField.style.border = "0.1em solid black";
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
