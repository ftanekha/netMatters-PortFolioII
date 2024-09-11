document.addEventListener(
    'DOMContentLoaded', ()=>{
        const children = document.querySelectorAll('.child')
        const topFirstChild = document.querySelector('#top-first-child')
        const topSecondChild = document.querySelector('#top-second-child')
        const bottomChild = document.querySelector('#bottom-child')
        const closeButtons = document.querySelectorAll('.close');

        [topFirstChild, topSecondChild, bottomChild].forEach(
            el => {
                ///////////// OPEN EXAMPLES MODAL /////////////////////////////////////////////////
                el.addEventListener(
                    'dblclick', ({target})=> {
                        target.classList.add('front')
                        target.title = ''
                        ///////////CLOSE/COLLAPSE EXAMPLES MODAL /////////////////////////
                        closeButtons.forEach(
                            btn => {
                                const parent = target

                                if(btn.parentElement === parent){
                                    btn.style.display = 'inline-flex'
                                    btn.addEventListener(
                                        'click', ()=>{
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