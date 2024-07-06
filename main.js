import {animateScrollDownButtonInfo, animateScrollUpButtonInfo, isUserEmailAddressValid, isUserTelephoneValid} from './js/utilities.js'

document.addEventListener(
    'DOMContentLoaded', ()=>{
        //animate banner/ homapage scroll-up&down buttons only once on first page load
        const hasScrollDownButtonBeenAnimated = localStorage.getItem('hasScrollDownButtonBeenAnimated')
        if(!hasScrollDownButtonBeenAnimated){
            animateScrollDownButtonInfo()
            localStorage.setItem('hasScrollDownButtonBeenAnimated', true)
        }

        const hasScrollUpButtonBeenAnimated = localStorage.getItem('hasScrollUpButtonBeenAnimated')
        if(!hasScrollUpButtonBeenAnimated){
            animateScrollUpButtonInfo()
            localStorage.setItem('hasScrollUpButtonBeenAnimated', true)
        }
        //toggle side menu on small screen devices
        // const mainContent = document.querySelector('div#main-content')
        const hamburgerMenuButton = document.querySelector('button#hamburger-button')
        const sideMenu = document.querySelector('div#side-menu')
        // sideMenu.style.display = 'flex'
        // const sideMenuWidth = 270
        const mQuery = window.matchMedia('(max-width: 768px)')
        hamburgerMenuButton.addEventListener(
            'click',
            ()=> {
               if(mQuery.matches){
                    if(sideMenu.style.display === 'flex'){
                        sideMenu.style.display = 'none'
                    }else{
                        sideMenu.style.display = 'flex'
                        //only shift the body by half the width of the side menu as its contents are center-aligned vertically
                        // if(mQuery.matches) mainContent.style.right = `-${sideMenuWidth/2}px`
                    }
               }
            }
        )

        //validate contact-me form data
        const currentPageUri = document.location.href
        if(currentPageUri.includes('#contact-me')){
            const contactMeForm = document.querySelector('form#contact-me-form')
            contactMeForm.addEventListener(
                'submit', 
                (ev)=>{
                    ev.preventDefault()
                    //collect user data
                    const userData = {
                        'First Name': document.querySelector('#first-name').value,
                        'Last Name': document.querySelector('#last-name').value,
                        'Full Name': '',
                        'Telephone': document.querySelector('#telephone').value,
                        'Email': document.querySelector('#email').value,
                        'Message': document.querySelector('#message').value
                    }
                    userData['Full Name'] = userData['First Name'] + ' ' + userData['Last Name']
                    //validate data
                    if(
                        isUserEmailAddressValid(userData['Email']) 
                                        &&
                        isUserTelephoneValid(userData['Telephone']) 
                    ){
                        alert(`Thank you for leaving a message! I'll be in touch very soon.`)
                    }else{
                        alert('Your message has not been sent due to an invalid email and/or telephone number.')
                    }
                }
            )
        }
    }
)