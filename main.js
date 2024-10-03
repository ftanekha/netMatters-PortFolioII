import {shouldPostData, displayInfoMessage} from './js/utilities.js'

document.addEventListener(
    'DOMContentLoaded', ()=>{
        //validate contact-me form data
        if(document.querySelector('form#contact-me-form')){
            const contactMeForm = document.querySelector('form#contact-me-form')
            contactMeForm.addEventListener(
                'submit', 
                (ev)=>{
                    ev.preventDefault()
                    // collect user data
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
                        const url = './post-form-data.php'
                        fetch(
                            url, 
                            {
                                method: 'POST',
                                'Content-Type': 'application/json',
                                body: JSON.stringify(userData)
                            }
                        )
                        .then(res =>  res.json())
                        .then(
                            data => {
                                //display error messages from server
                                if(Array.isArray(data)){
                                    console.error(`${data.length} Error/s detected:`)                                
                                    data.forEach( error => {
                                        console.error(error)
                                    })
                                    displayInfoMessage(data)
                                }else{
                                    // display success message from server
                                    console.info(data)
                                    displayInfoMessage(`Thank you ${userData['first_name']} ${userData['last_name']} for leaving a message!\nI'll be in touch very soon.😎`)
                                    contactMeForm.reset()
                                }
                            }
                        )
                        .catch(err => {
                            if(typeof err === 'string') console.error(err)
                            if(typeof err === 'object') console.table(err)
                        })   
                    }
                }
            )
        }
    }
)