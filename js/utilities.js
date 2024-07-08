function isUserEmailAddressValid(userEmailAddress){
    /*check that user email address:*/
    //comprises alphanumeric characters (dot excluded), and is 6 to 20 characters long (e.g. ghxnyab234)
    //followed by the @ symbol
    //followed by another series of alphanumeric characters, with a dot at the end (e.g. google.com or outlook.com)
    const regex = EMAIL_VALIDATOR_REGEX
    const result = regex.test(userEmailAddress)
    //returns a boolean value
    return result
}
/////////////////////////////////////////////////////////////////////////////////////
function isUserTelephoneValid(userTelephone){
    const regex = TELEPHONE_VALIDATOR_REGEX
    const result = regex.test(userTelephone)
    return result
}
/////////////////////////////////////////////////////////////////////////////////////
export {isUserEmailAddressValid, isUserTelephoneValid}