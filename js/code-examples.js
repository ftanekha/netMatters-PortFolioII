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
        const accordionControls = document.querySelectorAll('.accordion-control')

        const tags = document.querySelectorAll('.tag')
        const projects = [topFirstChild, topSecondChild, bottomChild]
        const chestnut = 'rgb(184, 77, 80)'
        const gothamGreen = '#00573F'
        
        function promptClick(els){
            const timer = setInterval(
                ()=> {
                    els.forEach(
                        el => {
                                el.style.backgroundColor = (el.style.backgroundColor === chestnut) ? gothamGreen : chestnut
                            }
                        )
                }, 800
            )

            tags.forEach(
                tag => {
                    tag.addEventListener(
                        'click', ()=> {
                            els.forEach(
                                el => el.style.backgroundColor = chestnut
                            )
                            clearInterval(timer)
                        }
                    )
                }
            )

            els.forEach(
                el => {
                    el.addEventListener(
                        'dblclick', ()=> {
                            els.forEach(
                                el => el.style.backgroundColor = chestnut
                            )
                            clearInterval(timer)
                        }
                    )
                }
            )  
        }

        tags.forEach(
            tag => {
                tag.addEventListener(
                    'click', ({target})=>{
                        const textContent = target.textContent.toLowerCase()
                        const activeProjects = []
                        projects.forEach(
                            project => {
                                if((project.getAttribute('data-tags')).includes(textContent)){
                                    activeProjects.push(project)
                                }
                            }
                        )
                        promptClick(activeProjects)
                    }
                )
            }
        )

        let projectOnDisplay = ''
        //MODAL
        function displayModal(ev){
            //
            projectOnDisplay = ev.currentTarget
            projectOnDisplay.removeEventListener('dblclick', displayModal)
            //
            projectOnDisplay.classList.add('front')
            projectOnDisplay .title = ''
            ///////////CLOSE/COLLAPSE EXAMPLES MODAL///
            closeButtons.forEach(
                btn => {
                    if(btn.parentElement === projectOnDisplay){
                        btn.style.display = 'inline-flex'
                        btn.title =  'close Examples modal'
                    }
                }
            )
        }

        let currentExampleClassName = ''
        let previousScrollTop = 0

        projects.forEach(
            el => {
                el.addEventListener(
                    /////////////OPEN EXAMPLES MODAL///
                    'dblclick', displayModal
                )
            }
        )
        //Code examples
        examplesLink.forEach(
            link => {
                link.addEventListener(
                    'click', ({currentTarget})=>{
                        //store current scrollTop
                        previousScrollTop = projectOnDisplay.scrollTop
                        //
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
                        const exampleClassNames = [
                            'choosing-random-color', 'flexbox', 'styling-images-in-collection', 'import-export', 'fetch-api', 'local-storage',
                            'using-handlebars', 'frontend-validation-html', 'frontend-validation-js', 'generating-success-vs-error-messages', 'php-essentials', 'php-error-handling', 'sql-query',
                            'ico-moon', 'sticky-header-scss', 'scss-variables', 'scss-functions', 'side-menu-and-calc', 'using-jquery-plugins', 'sticky-header-jquery', 'side-menu-jquery',
                            'accordion', 'using-include', 'looping-over-database-response', 'receiving-and-decoding-form-data', 'validating-and-sanitising-form-data', 'sending-data-to-database'
                        ]
                        
                        exampleClassNames.forEach(
                            exampleClassName => {
                                if(currentTarget.classList.contains(exampleClassName)) {
                                    const classContainer = document.querySelector(`#${exampleClassName}-example-container`)
                                    if(exampleClassName === 'ico-moon' || exampleClassName === 'side-menu-and-calc'){
                                        classContainer.style.display = 'flex'
                                    }else{
                                        classContainer.style.display = 'block'
                                    }
                                    
                                    currentExampleClassName = exampleClassName
                                }
                            }
                        )
                        //display goBack button
                        goBackButtons.forEach(
                            button => {
                                if(button.parentElement === projectOnDisplay){
                                    button.style.display = 'flex'
                                    button.title = 'go back'
                                }
                            }
                        )
                    }
                )
            }
        )
        //Display list of examples
        function displayListOfExamples(){
            examplesListContainers.forEach(
                examplesListContainer=> {
                    examplesListContainer.style.position = 'static'
                    examplesListContainer.style.bottom = ''
                }
            )
            //restore scrollTop
            projectOnDisplay.scrollTop = previousScrollTop
        }
        
        goBackButtons.forEach(
            button => {
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
                        displayListOfExamples()
                    }
                )
            }
        )
        
        closeButtons.forEach(
            btn => {
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
        
                        displayListOfExamples()
        
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
        )
        //Toggle example images
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
)