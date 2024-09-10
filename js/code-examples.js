document.addEventListener(
    'DOMContentLoaded', ()=>{
        const children = document.querySelectorAll('.child')
        const topFirstChild = document.querySelector('#top-first-child')
        const topSecondChild = document.querySelector('#top-second-child')
        const bottomChild = document.querySelector('#bottom-child');

        [topFirstChild, topSecondChild, bottomChild].forEach(
            el => {
                el.addEventListener(
                    'click', ev => {
                        children.forEach(
                            child => {
                                if(child !== ev.target) child.style.display = 'none'
                            }
                        )
                        ev.target.classList.add('front')
                        ev.target.title = 'Double-Click to collapse.'
                        document.body.style.backgroundColor = '#b84d50'

                        ev.target.addEventListener(
                            'dblclick', ()=> {
                                children.forEach(
                                    child => {
                                        if(child !== ev.target) child.style.display = 'inline-flex'
                                    }
                                )
                                ev.target.classList.remove('front')
                                ev.target.title = 'Click to expand. Double-Click to collapse.'
                                document.body.style.backgroundColor = '#fff'
                            }
                        )
                    }
                )
            }
        )
    }
)