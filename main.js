import {isUserEmailAddressValid, isUserTelephoneValid, displayInfoMessage} from './js/utilities.js'

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
        if(document.URL.includes('contact-me') || document.URL.includes('index.html')){
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
                    
                    //validate user data
                    if(!isUserTelephoneValid(userData['Telephone'])){
                        if(!isUserEmailAddressValid(userData['Email'])){
                            return displayInfoMessage('invalid telephone number and email address')
                        }
                        if(isUserEmailAddressValid(userData['Email'])){
                            return displayInfoMessage('invalid telephone number')
                        }
                    }
                    
                    if(isUserTelephoneValid(userData['Telephone'])){
                        if(!isUserEmailAddressValid(userData['Email'])){
                            return displayInfoMessage('invalid email address')
                        }
                    }
                    
                    if(
                        isUserTelephoneValid(userData['Telephone']) 
                                            &&
                        isUserEmailAddressValid(userData['Email']) 
                    ){
                        displayInfoMessage(`Thank you ${userData['Full Name']} for leaving a message!\nI'll be in touch very soon.😎`)
                        return contactMeForm.reset()
                    }
                }
            )
        }
    }
)