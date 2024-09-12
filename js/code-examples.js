document.addEventListener(
    'DOMContentLoaded', ()=>{
        const children = document.querySelectorAll('.child')
        const topFirstChild = document.querySelector('#top-first-child')
        const topSecondChild = document.querySelector('#top-second-child')
        const bottomChild = document.querySelector('#bottom-child')
        const closeButtons = document.querySelectorAll('.close');
        const examplesLink = document.querySelectorAll('.examples-link')
        const exampleContainers = document.querySelectorAll('.examples-container')
        const examples = document.querySelectorAll('.example');

        [topFirstChild, topSecondChild, bottomChild].forEach(
            el => {
                ///////////// OPEN EXAMPLES MODAL /////////////////////////////////////////////////
                el.addEventListener(
                    'dblclick', ({target})=> {
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
                                        if(target.classList.contains('choosing-random-color')) document.querySelector('#choosing-random-color-example-container').style.display = 'block'
                                        if(target.classList.contains('flexbox')) document.querySelector('#flexbox-example-container').style.display = 'block'
                                        if(target.classList.contains('styling-images')) document.querySelector('#styling-images-in-collection-example-container').style.display = 'block'
                                        if(target.classList.contains('import-export')) document.querySelector('#import-export-example-container').style.display = 'block'
                                        if(target.classList.contains('fetch-api')) document.querySelector('#fetch-api-example-container').style.display = 'block'
                                        if(target.classList.contains('local-storage')) document.querySelector('#local-storage-example-container').style.display = 'block'

                                        exampleContainers.forEach(
                                            examplesContainer => {
                                                //examplesContainer.style.display = 'none !important'
                                                examplesContainer.style.position = 'fixed'
                                                examplesContainer.style.bottom = '-1000px'
                                            }
                                        )

                                        //toggle images
                                        const accordionControls = document.querySelectorAll('.accordion-control')
                                        accordionControls.forEach(
                                            accordionControl => accordionControl.addEventListener(
                                                'click', ()=>{
                                                    const accordion = accordionControl.parentElement.nextElementSibling
                                                    if(accordion.style.display !== 'flex'){
                                                        accordion.style.display = 'flex'
                                                    }else{
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
                                            examples.forEach(
                                                example => example.style.display = 'none'
                                            )

                                            exampleContainers.forEach(
                                                examplesContainer => {
                                                    //examplesContainer.style.display = 'none !important'
                                                    examplesContainer.style.position = 'static'
                                                    examplesContainer.style.bottom = ''
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