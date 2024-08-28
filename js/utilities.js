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
    const firstName = document.querySelector('#first-name')
    const lastName = document.querySelector('#last-name')
    const email = document.querySelector('#email')
    const telephone = document.querySelector('#telephone')
    const message = document.querySelector('#message')
    
    let formHasEmptyFields = false

    const fields = []

        if(!firstName.value){
            fields.push('name')
            firstName.style.borderColor = '#d64541' 
            formHasEmptyFields = true
        }
        
        if(!lastName.value){
            fields.push('name')
            lastName.style.borderColor = '#d64541' 
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
    //validate user data
    const errors = []
    if(!isValidStringInput(firstName)){
        errors.push('Invalid first name.')
    }
    if(!isValidStringInput(lastName)){
        errors.push('Invalid last name.')
    }
    if(!isUserTelephoneValid(telephone)){
        errors.push('Invalid telephone number.')
    }
    if(!isUserEmailAddressValid(email)){
        errors.push('Invalid email address.')
    }
    if(message.length < 3){
        errors.push('Message too short.')
    }
    if(hasEmptyFields()){
        errors.push('Empty form fields.')
    }

    if(errors.length === 0){
        return [true, undefined]
    }else{
        return [false, errors]
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
function removeInfoMessage(el, removeInnerHTML){
    const timer = setTimeout(
        ()=> {
            const formValidationMessagesContainer = document.querySelector('div#form-validation-messages-container')
            formValidationMessagesContainer.style.display = 'none'
            if(removeInnerHTML) {
                el['innerHTML'] = ''
            }
            el['style'].display = 'none'
            return clearTimeout(timer)
        }, 7000
    )
}
/////////////////////////////////////////////////////////////////////////////////////
function displayInfoMessage(data){
    const formValidationMessagesContainer = document.querySelector('div#form-validation-messages-container')
    const successMessage = document.querySelector('div#success-message')
    const invalidFormDataWarningList = document.querySelector('ul#invalid-form-data-warning-list')
    const invalidFormDataWarning = document.querySelector('div#invalid-form-data-warning')
    const formControls = document.querySelectorAll('.form-control')

    formValidationMessagesContainer.style.display = 'flex'
    formValidationMessagesContainer.addEventListener(
        'click', clearInfoMessageDisplay
    )

    formControls.forEach(
        formControl => formControl.addEventListener(
            'click', clearInfoMessageDisplay
        )
    )

    switch(Array.isArray(data)){
        case true: 
            clearInfoMessageDisplay()
            const errorMessages = data.map(msg => {
                const li = document.createElement('li')
                li.innerText = msg
                return li
            }) 
            invalidFormDataWarning.style.display = 'block'
            errorMessages.forEach(msg =>  invalidFormDataWarningList.appendChild(msg))

            removeInfoMessage(invalidFormDataWarning, true)
        break;
        default:
            clearInfoMessageDisplay()
            successMessage.style.display = 'flex'
            document.querySelector('div#success-message p .lead-sentence').textContent = data

            removeInfoMessage(successMessage, false)
        break;
    }
}
/////////////////////////////////////////////////////////////////////////////////////
export {shouldPostData, displayInfoMessage}