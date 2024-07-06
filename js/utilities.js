function animateScrollDownButtonInfo(){
    const [scrollDownInfoElementScroll, scrollDownInfoElementsDown] = document.querySelectorAll('small.scroll-down-info')
    const scrollDownButton = document.querySelector('span.glyphicon.glyphicon-circle-arrow-down')

    scrollDownButton.addEventListener(
        'mouseover',
        ()=> {
            const interval = setInterval(
                ()=>{
                    scrollDownInfoElementScroll.style.visibility = 
                    ( scrollDownInfoElementScroll.style.visibility === 'hidden' ) ? 
                    'visible' : 'hidden'

                    scrollDownInfoElementsDown.style.visibility = 
                    ( scrollDownInfoElementScroll.style.visibility === 'visible' ) ? 
                    'hidden' : 'visible'
                 }, 1200
            )
            const timeout = setTimeout(
                ()=> {
                    clearInterval(interval)
                    document.querySelectorAll('small.scroll-down-info').forEach(el => el.style.visibility = 'hidden')
                    clearTimeout(timeout)
                }, 6000
            )
        }
    )
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function animateScrollUpButtonInfo(){
    const [scrollUpInfoElementScroll, scrollUpInfoElementsUp] = document.querySelectorAll('small.scroll-up-info')
    const scrollUpButton = document.querySelector('span.glyphicon.glyphicon-circle-arrow-up')

    scrollUpButton.addEventListener(
        'mouseover',
        ()=> {
            const interval = setInterval(
                ()=>{
                    scrollUpInfoElementScroll.style.visibility = 
                    ( scrollUpInfoElementScroll.style.visibility === 'hidden' ) ? 
                    'visible' : 'hidden'

                    scrollUpInfoElementsUp.style.visibility = 
                    ( scrollUpInfoElementScroll.style.visibility === 'visible' ) ? 
                    'hidden' : 'visible'

                 }, 1200
            )
            const timeout = setTimeout(
                ()=> {
                    clearInterval(interval)
                    document.querySelectorAll('small.scroll-up-info').forEach(el => el.style.visibility = 'hidden')
                    clearTimeout(timeout)
                }, 6000
            )
        }
    )
}
/////////////////////////////////////////////////////////////////////////////////////
function isUserEmailAddressValid(userEmailAddress){
    /*check that user email address:*/
    //comprises alphanumeric characters (dot excluded), and is 6 to 20 characters long (e.g. ghxnyab234)
    //followed by the @ symbol
    //followed by another series of alphanumeric characters, with a dot at the end (e.g. google.com or outlook.com)
    const regex = /^[\w-\.]{6,30}@([\w-]+\.)+[\w-]{2,4}$/g
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
export {animateScrollDownButtonInfo, animateScrollUpButtonInfo, isUserEmailAddressValid, isUserTelephoneValid}