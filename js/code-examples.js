document.addEventListener(
    'DOMContentLoaded', ()=>{
        const children = document.querySelectorAll('.child')
        const topFirstChild = document.querySelector('#top-first-child')
        const topSecondChild = document.querySelector('#top-second-child')
        const bottomChild = document.querySelector('#bottom-child')
        const goBackButtons = document.querySelectorAll('.back')
        const closeButtons = document.querySelectorAll('.close')
        const examplesLink = document.querySelectorAll('.examples-link')
        const examplesListContainers = document.querySelectorAll('.examples-list-container')
        const examples = document.querySelectorAll('.example')
        const accordions = document.querySelectorAll('.accordion')
        const accordionControls = document.querySelectorAll('.accordion-control');

        [topFirstChild, topSecondChild, bottomChild].forEach(
            el => {
                ///////////// OPEN EXAMPLES MODAL /////////////////////////////////////////////////
                el.addEventListener(
                    'dblclick', displayModal = (ev)=> {
                        ev.stopPropagation()
                        //
                        const projectOnDisplay = ev.target
                        projectOnDisplay .removeEventListener('dblclick', displayModal)
                        //
                        projectOnDisplay.classList.add('front')
                        projectOnDisplay .title = ''
                        //////show examples///////////////
                        examplesLink.forEach(
                            link => {
                                link.addEventListener(
                                    'click', ({target})=>{
                                        examples.forEach(
                                            example => example.style.display = 'none'
                                        )
                                        //hide list of examples
                                        examplesListContainers.forEach(
                                            examplesListContainer=> {
                                                //examplesListContainer.style.display = 'none !important'
                                                examplesListContainer.style.position = 'fixed'
                                                examplesListContainer.style.bottom = '-1000px'
                                            }
                                        )
                                        //only display corresponding example
                                        const exampleClassNames = ['choosing-random-color', 'flexbox', 'styling-images-in-collection', 'import-export', 'fetch-api', 'local-storage']
                                        let currentExampleClassName = ''
                                        exampleClassNames.forEach(
                                            exampleClassName => {
                                                if(target.classList.contains(exampleClassName)) {
                                                    document.querySelector(`#${exampleClassName}-example-container`).style.display = 'block'
                                                    currentExampleClassName = exampleClassName

                                                     //toggle images
                                                    accordionControls.forEach(
                                                        accordionControl => accordionControl.addEventListener(
                                                            'click', ({target})=>{
                                                                const accordion = target.parentElement.nextElementSibling

                                                                const acd = accordion.style.display
                                                                if(acd === '') accordion.style.display = 'flex'
                                                                if(acd === 'none') accordion.style.display = 'flex'
                                                                if(acd === 'flex') accordion.style.display = 'none'
                                                            }
                                                        )
                                                    )
                                                }
                                            }
                                        )
                                        //display goBack button
                                        goBackButtons.forEach(
                                            button => {
                                                if(button.parentElement === projectOnDisplay){
                                                    button.style.display = 'flex'
                                                    button.title = 'go back'
                                                    button.addEventListener(
                                                        'click', ({target: btn})=>{
                                                            accordions.forEach(
                                                                accordion => accordion.style.display = 'none'
                                                            )
                                                            //remove example from display
                                                            document.querySelector(`#${currentExampleClassName}-example-container`).style.display = 'none'
                                                            //hide goBack button
                                                            btn.title = ''
                                                            btn.style.display = 'none'
                                                            //bring back example list container
                                                            examplesListContainers.forEach(
                                                                examplesListContainer=> {
                                                                    //examplesListContainer.style.display = 'none !important'
                                                                    examplesListContainer.style.position = 'static'
                                                                    examplesListContainer.style.bottom = ''
                                                                    // examplesListContainer.removeEventListener('dblclick', displayModal)
                                                                }
                                                            )
                                                        }
                                                    )
                                                }
                                            }
                                        )
                                    }
                                )
                            }
                        )
                        ///////////CLOSE/COLLAPSE EXAMPLES MODAL /////////////////////////
                        closeButtons.forEach(
                            btn => {

                                if(btn.parentElement === projectOnDisplay){
                                    btn.style.display = 'inline-flex'
                                    btn.title =  'close Examples modal'
                                    btn.addEventListener(
                                        'click', ()=>{
                                            accordions.forEach(
                                                accordion => accordion.style.display = 'none'
                                            )

                                            goBackButtons.forEach(
                                                button => {
                                                    button.style.display = 'none'
                                                    button.title = ''
                                                }
                                            )

                                            examples.forEach(
                                                example => example.style.display = 'none'
                                            )

                                            examplesListContainers.forEach(
                                                examplesListContainer=> {
                                                    console.log(examplesListContainer)
                                                    //examplesListContainer.style.display = 'none !important'
                                                    examplesListContainer.style.position = 'static'
                                                    examplesListContainer.style.bottom = ''
                                                    // examplesListContainer.removeEventListener('dblclick', displayModal)
                                                }
                                            )

                                            children.forEach(
                                                child => {
                                                    child.style.display = 'inline-flex'
                                                }
                                            )
                                
                                            btn.style.display = 'none'

                                            projectOnDisplay.addEventListener('dblclick', displayModal)
                                            projectOnDisplay.title = 'Double-Click to expand.'
                                            projectOnDisplay.classList.remove('front')
                                        }
                                    )
                                }
                            }
                        )
                    }
                )
            }
        )
    }
)