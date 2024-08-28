import {isValidStringInput, isUserEmailAddressValid, isUserTelephoneValid, displayInfoMessage} from './js/utilities.js'

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
                        'first_name': document.querySelector('#first-name').value,
                        'last_name': document.querySelector('#last-name').value,
                        'telephone': document.querySelector('#telephone').value,
                        'email': document.querySelector('#email').value,
                        'message': document.querySelector('#message').value
                    }
                    //validate user data
                    if(!isValidStringInput(userData['first_name'])){
                        console.error(1)
                        return displayInfoMessage('invalid first name')
                   }else if(!isValidStringInput(userData['last_name'])){
                        console.error(2)
                        return displayInfoMessage('invalid last name')
                    }else if(!isUserTelephoneValid(userData['telephone'])){
                        console.error(3)
                        return displayInfoMessage('invalid telephone number')
                    }else if(!isUserEmailAddressValid(userData['email'])){
                        console.error(4)
                        return displayInfoMessage('invalid email address')
                    }else{
                        //POST data & display success message
                        fetch(
                            'post-form-data.php', 
                            {
                                method: 'POST',
                                'Content-Type': 'application/json',
                                body: JSON.stringify(userData)
                            }
                        )
                        .then(res => {
                            if(res.ok){
                                displayInfoMessage(`Thank you ${userData['first_name']} ${userData['last_name']} for leaving a message!\nI'll be in touch very soon.😎`)
                            }
                            return res.json()
                        })
                        .then(
                            data => {
                                if(Array.isArray(data)){
                                    console.table(data[0])
                                    console.warn(data[1])
                                }else{
                                    console.info(data)
                                    contactMeForm.reset()
                                }
                            }
                        )
                        .catch(err => console.error(err))   
                    }
                }
            )
        }
    }
)