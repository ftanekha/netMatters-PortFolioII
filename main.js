import {shouldPostData, displayInfoMessage} from './js/utilities.js'

document.addEventListener(
    'DOMContentLoaded', ()=>{
        //toggle side menu employer prompt (only show it omce per session) 
        const sideMenuSupport = document.querySelector('#side-menu-support')
        const mQuery = window.matchMedia('(min-width: 768px)')

        if(
            !window.document.URL.includes('about-me')
            && !window.document.URL.includes('my-portfolio')
            && !window.document.URL.includes('code-examples')
            && !window.document.URL.includes('scs')
            && !window.document.URL.includes('contact-me')
            && mQuery.matches
        ){
            sideMenuSupport.classList.remove('side-menu-support-normal')
            sideMenuSupport.classList.add('side-menu-support-display-employer-prompt')
        }

        sideMenuSupport.addEventListener(
            'click', ()=>{
                const viewportWidth = window.innerWidth
                if(sideMenuSupport.classList.contains('side-menu-support-display-employer-prompt') && viewportWidth >= 768){
                    sideMenuSupport.classList.remove('side-menu-support-display-employer-prompt')
                    sideMenuSupport.classList.add('side-menu-support-normal')
                }
            }
        )
        //
        const employerLinkToCodeExamplesPage = document.querySelector('#employer-link-to-code-examples-page')
        employerLinkToCodeExamplesPage.addEventListener(
            'click', ()=> {
                // window.location.assign( 'http://localhost/projects/netmatters/portfolioII/pages/code-examples.php')
                window.location.assign( 'https://pbuwcsvdof.eupar01.qoddiapp.com/pages/code-examples.php')
            }
        )
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
                        fetch(
                            '/post-form-data.php', 
                            {
                                method: 'POST',
                                headers: {'Content-Type': 'application/json'},
                                body: JSON.stringify(userData)
                            }
                        )
                        .then(res => {
                            if(typeof text !== 'string') return res.text()
                            if(JSON.parse(text)) return res.json()
                            return res
                        })
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