import {isUserEmailAddressValid, isUserTelephoneValid} from './js/utilities.js'

document.addEventListener(
    'DOMContentLoaded', ()=>{
        //toggle side menu on small screen devices
        const hamburgerMenuButton = document.querySelector('button#hamburger-button')
        const sideMenu = document.querySelector('div#side-menu')
        const mQuery = window.matchMedia('(max-width: 768px)')
        hamburgerMenuButton.addEventListener(
            'click',
            ()=> {
               if(mQuery.matches){
                    if(sideMenu.style.display === 'flex'){
                        sideMenu.style.display = 'none'
                    }else{
                        sideMenu.style.display = 'flex'
                    }
               }
            }
        )

        //validate contact-me form data
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
                    alert(`Thank you ${userData['Full Name']} for leaving a message!\nI'll be in touch very soon.😄`)
                }else{
                    alert('Your message has not been sent due to an invalid email and/or telephone number.')
                }
                contactMeForm.reset()
            }
        )
    }
)