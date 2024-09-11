document.addEventListener(
    'DOMContentLoaded', ()=>{
        const children = document.querySelectorAll('.child')
        const topFirstChild = document.querySelector('#top-first-child')
        const topSecondChild = document.querySelector('#top-second-child')
        const bottomChild = document.querySelector('#bottom-child')
        const closeButtons = document.querySelectorAll('.close');

        [topFirstChild, topSecondChild, bottomChild].forEach(
            el => {
                el.addEventListener(
                    'click', ev => {
                        ev.stopPropagation()
                        
                        children.forEach(
                            child => {
                                if(child !== ev.target) child.style.display = 'none'
                            }
                        )
                        ev.target.classList.add('front')
                        ev.target.title = 'Double-Click to collapse.'
                        //implement 2 ways to collapse/ close modal
                        //1] use button
                        closeButtons.forEach(
                            btn => {
                                ev.stopPropagation()

                                const parent = ev.target

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
                                            parent.classList.remove('front')
                                            parent.title = 'Click to expand. Double-Click to collapse.'
                                        }
                                    )
                                }
                            }
                        )
                        //2] use dblclick event on modal itself
                        ev.target.addEventListener(
                            'dblclick', ()=> {
                                children.forEach(
                                    child => child.style.display = 'inline-flex'
                                )
                                
                                closeButtons.forEach(
                                    btn => btn.style.display = 'none'
                                )

                                ev.target.classList.remove('front')
                                ev.target.title = 'Click to expand. Double-Click to collapse.'
                            }
                        )
                    }
                )
            }
        )
    }
)