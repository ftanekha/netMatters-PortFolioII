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
    const regex = /^\+?(?:\d\s?){10,12}$/g
    const result = regex.test(userTelephone)
    return result
}
/////////////////////////////////////////////////////////////////////////////////////
function clearInfoMessageDisplay(){
    const warningMessages = document.querySelectorAll('div.warning-message')
    warningMessages.forEach(
        msg => msg.style.display = 'none'
    )
}
/////////////////////////////////////////////////////////////////////////////////////
function removeInfoMessage(el){
    const timer = setTimeout(
        (el)=> {
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
export {isUserEmailAddressValid, isUserTelephoneValid, displayInfoMessage}