import {shouldPostData, displayInfoMessage} from './js/utilities.js'

document.addEventListener(
    'DOMContentLoaded', ()=>{
        //toggle side menu on small screen devices
        const hamburgerMenuButton = document.querySelector('button#hamburger-button')
        const sideMenu = document.querySelector('div#side-menu')
        // const mQuery = window.matchMedia('(max-width: 768px)')
        hamburgerMenuButton.addEventListener(
            'click',
            ()=> {
            //    if(mQuery.matches){
                    if(sideMenu.style.display === 'none'){
                        sideMenu.style.display = 'flex'
                    }else{
                        sideMenu.style.display = 'none'
                    }
            //    }
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

                    const [result, errors] = shouldPostData()

                    if(!result){
                        return displayInfoMessage(errors)
                    }else{
                        // POST data & display success message
                        fetch(
                            'post-form-data.php', 
                            {
                                method: 'POST',
                                'Content-Type': 'application/json',
                                body: JSON.stringify(userData)
                            }
                        )
                        .then(res =>  res.json())
                        .then(
                            data => {
                                if(Array.isArray(data)){
                                    console.error(`${data.length} Error/s detected:`)                                
                                    data.forEach( error => {
                                        console.error(error)
                                    })
                                    displayInfoMessage(data)
                                }else{
                                    console.info(data)
                                    displayInfoMessage(`Thank you ${userData['first_name']} ${userData['last_name']} for leaving a message!\nI'll be in touch very soon.😎`)
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