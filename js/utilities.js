function isValidStringInput(input){
    //only contains letters, dashes, apostrophes and whitespaces
    const regex = /^[a-zA-Z-' ]*$/g
    const result = regex.test(input)
    return result
}
///////////////////////////////////////////////////////////////////////////
function isUserEmailAddressValid(userEmailAddress){
    /*check that user email address:*/
    //comprises alphanumeric characters (dot excluded), and is 6 to 20 characters long (e.g. ghxnyab234)
    //followed by the @ symbol
    //followed by another series of alphanumeric characters, with a dot at the end (e.g. google.com or outlook.com)
    const regex = /^[\w-\.]{4,30}@([\w-]+\.)+[\w-]{2,10}$/g
    const result = regex.test(userEmailAddress)
    //returns a boolean value
    return result
}
/////////////////////////////////////////////////////////////////////////////////////
function isUserTelephoneValid(userTelephone){
    const regex = /^\+?(?:\d\s?){7,15}$/g
    const result = regex.test(userTelephone)
    return result
}
/////////////////////////////////////////////////////////////////////////////////////
function hasEmptyFields(){
    const name = document.querySelector('#name')
    const email = document.querySelector('#email')
    const telephone = document.querySelector('#telephone')
    const message = document.querySelector('#message')
    
    let formHasEmptyFields = false

    const fields = []

        if(!name.value){
            fields.push('name')
            name.style.borderColor = '#d64541' 
            formHasEmptyFields = true
        }
        if(!email.value){
            fields.push('email')

            email.style.borderColor = '#d64541' 
            formHasEmptyFields = true
        }
        if(!telephone.value){
            fields.push('telephone')

            telephone.style.borderColor = '#d64541' 
            formHasEmptyFields = true
        }
        if(!message.value){
            fields.push('message')

            message.style.borderColor = '#d64541' 
            formHasEmptyFields = true
        }

        if(formHasEmptyFields) return true
        return false
}
///////////////////////////////////////////////////////////////////////////
function shouldPostData(){
    
    const firstName = document.querySelector('#first-name').value
    const lastName = document.querySelector('#last-name').value
    const telephone = document.querySelector('#telephone').value
    const email = document.querySelector('#email').value
    const message = document.querySelector('#message').value
    // form data validation
    if(
        !hasEmptyFields() && isValidStringInput(firstName)
        && isValidStringInput(lastName) && isUserEmailAddressValid(email) 
        && isUserTelephoneValid(telephone) && (message.length > 3)
    ){
        return [true, undefined]
    }else{
        if(!isValidStringInput(name.value)){
            // name.style.borderColor = '#d64541'
            return [false, 'firstname']
        }
        if(!isValidStringInput(company.value)){
            // company.style.borderColor = '#d64541'
            return [false, 'company']
        }
        if(!isUserEmailAddressValid(email.value)){
            // email.style.borderColor = '#d64541'
            return [false, 'email']
        }
        if(!isUserTelephoneValid(telephone.value)){
            // telephone.style.borderColor = '#d64541'
            return [false, 'telephone']
        }
        if(message.value.length < 3){
            // message.style.borderColor = '#d64541'
            return [false, 'message']
        }
    }
}
/////////////////////////////////////////////////////////////////////////
function clearInfoMessageDisplay(){
    const warningMessages = document.querySelectorAll('div.warning-message')
    warningMessages.forEach(
        msg => msg.style.display = 'none'
    )
}
/////////////////////////////////////////////////////////////////////////////////////
function removeInfoMessage(el){
    const timer = setTimeout(
        ()=> {
            const formValidationMessagesContainer = document.querySelector('div#form-validation-messages-container')
            formValidationMessagesContainer.style.display = 'none'
            el['style'].display = 'none'
            return clearTimeout(timer)
        }, 100000
    )
}
/////////////////////////////////////////////////////////////////////////////////////
function displayInfoMessage(reasonForMessage){
    const formValidationMessagesContainer = document.querySelector('div#form-validation-messages-container')

    const successMessage = document.querySelector('div#success-message')
    const invalidTelephoneNumberWarning = document.querySelector('div#invalid-telephone-number-warning')
    const invalidEmailAddressWarning = document.querySelector('div#invalid-email-address-warning')

    formValidationMessagesContainer.style.display = 'flex'

    switch(reasonForMessage){
        case 'invalid telephone number and email address': 
            clearInfoMessageDisplay()
            invalidTelephoneNumberWarning.style.display = 'block'
            invalidEmailAddressWarning.style.display = 'block'

            removeInfoMessage(invalidTelephoneNumberWarning)
            removeInfoMessage(invalidEmailAddressWarning)
        break;
        case 'invalid telephone number': 
            clearInfoMessageDisplay()
            invalidTelephoneNumberWarning.style.display = 'block'
            removeInfoMessage(invalidTelephoneNumberWarning)
        break;
        case 'invalid email address': 
            clearInfoMessageDisplay()
            invalidEmailAddressWarning.style.display = 'block'
            removeInfoMessage(invalidEmailAddressWarning)
        break;
        default:
            clearInfoMessageDisplay()
            successMessage.style.display = 'flex'
            document.querySelector('div#success-message p .lead-sentence').textContent = reasonForMessage

            removeInfoMessage(successMessage)
        break;
    }
}
/////////////////////////////////////////////////////////////////////////////////////
export {isValidStringInput, isUserEmailAddressValid, isUserTelephoneValid, displayInfoMessage}