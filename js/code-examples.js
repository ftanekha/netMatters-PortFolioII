document.addEventListener(
    'DOMContentLoaded', ()=>{
        const children = document.querySelectorAll('.child')
        const topFirstChild = document.querySelector('#top-first-child')
        const topSecondChild = document.querySelector('#top-second-child')
        const bottomChild = document.querySelector('#bottom-child')
        const goBackButtons = document.querySelectorAll('.back')
        const closeButtons = document.querySelectorAll('.close');
        const examplesLink = document.querySelectorAll('.examples-link')
        const examplesListContainers = document.querySelectorAll('.examples-list-container')
        const examples = document.querySelectorAll('.example');

        [topFirstChild, topSecondChild, bottomChild].forEach(
            el => {
                ///////////// OPEN EXAMPLES MODAL /////////////////////////////////////////////////
                el.addEventListener(
                    'dblclick', ({target})=> {
                        let projectOnDisplayId = target.id
                        //
                        target.classList.add('front')
                        target.title = ''
                        //////show examples///////////////
                        examplesLink.forEach(
                            link => {
                                link.addEventListener(
                                    'click', ({target})=>{
                                        examples.forEach(
                                            example => example.style.display = 'none'
                                        )
                                        //only display corresponding example
                                        const exampleClassNames = ['choosing-random-color', 'flexbox', 'styling-images-in-collection', 'import-export', 'fetch-api', 'local-storage']
                                        let currentExampleClassName = ''
                                        exampleClassNames.forEach(
                                            exampleClassName => {
                                                if(target.classList.contains(exampleClassName)) {
                                                    document.querySelector(`#${exampleClassName}-example-container`).style.display = 'block'
                                                    currentExampleClassName = exampleClassName
                                                }
                                            }
                                        )
                                        //
                                        examplesListContainers.forEach(
                                            examplesListContainer=> {
                                                //examplesListContainer.style.display = 'none !important'
                                                examplesListContainer.style.position = 'fixed'
                                                examplesListContainer.style.bottom = '-1000px'
                                            }
                                        )
                                        //display goBack button
                                        goBackButtons.forEach(
                                            button => {
                                                button.style.display = 'flex'
                                                button.title = 'go back'
                                                button.addEventListener(
                                                    'click', ()=>{
                                                        //remove example from display
                                                        document.querySelector(`#${currentExampleClassName}-example-container`).style.display = 'none'
                                                        //hide goBack button
                                                        goBackButtons.forEach(
                                                            button => {
                                                                button.title = ''
                                                                button.style.display = 'none'
                                                            }
                                                        )
                                                        //bring back example list container
                                                        examplesListContainers.forEach(
                                                            examplesListContainer=> {
                                                                //examplesListContainer.style.display = 'none !important'
                                                                examplesListContainer.style.position = 'static'
                                                                examplesListContainer.style.bottom = ''
                                                            }
                                                        )
                                                    }
                                                )
                                            }
                                        )
                                        //toggle images
                                        const accordionControls = document.querySelectorAll('.accordion-control')
                                        accordionControls.forEach(
                                            accordionControl => accordionControl.addEventListener(
                                                'click', ()=>{
                                                    const accordion = accordionControl.parentElement.nextElementSibling

                                                    let acd = accordion.style.display
                                                    if(acd === '' || acd === 'none'){
                                                        accordion.style.display = 'flex'
                                                    }else if(acd === 'flex'){
                                                        accordion.style.display = 'none'
                                                    }
                                                }
                                            )
                                        )
                                    }
                                )
                            }
                        )
                        ///////////CLOSE/COLLAPSE EXAMPLES MODAL /////////////////////////
                        closeButtons.forEach(
                            btn => {
                                const parent = target

                                if(btn.parentElement === parent){
                                    btn.style.display = 'inline-flex'
                                    btn.title =  'close Examples modal'
                                    btn.addEventListener(
                                        'click', ()=>{
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
                                                    //examplesListContainer.style.display = 'none !important'
                                                    examplesListContainer.style.position = 'static'
                                                    examplesListContainer.style.bottom = ''
                                                }
                                            )

                                            children.forEach(
                                                child => {
                                                    child.style.display = 'inline-flex'
                                                }
                                            )
                                
                                            btn.style.display = 'none'
                                            parent.title = 'Double-Click to expand.'
                                            parent.classList.remove('front')
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