import {animateScrollDownButtonInfo} from './js/utilities.js'

document.addEventListener(
    'DOMContentLoaded', ()=>{
        //animate banner/ homapage scroll button only once on first page load
        const hasScrollDownButtonBeenAnimated = localStorage.getItem('hasScrollDownButtonBeenAnimated')
        if(!hasScrollDownButtonBeenAnimated){
            animateScrollDownButtonInfo()
            localStorage.setItem('hasScrollDownButtonBeenAnimated', true)
        }
        //toggle side menu on small screen devices
        // const mainContent = document.querySelector('div#main-content')
        const hamburgerMenuButton = document.querySelector('button#hamburger-button')
        const sideMenu = document.querySelector('div#side-menu')
        sideMenu.style.display = 'flex'
        // const sideMenuWidth = 270
        const mQuery = window.matchMedia('(max-width: 768px)')
        hamburgerMenuButton.addEventListener(
            'click',
            ()=> {
               if(mQuery.matches){
                    if(sideMenu.style.display === 'flex'){
                        sideMenu.style.display = 'none'
                    }else{
                        sideMenu.style.display = 'flex'
                        //only shift the body by half the width of the side menu as its contents are center-aligned vertically
                        // if(mQuery.matches) mainContent.style.right = `-${sideMenuWidth/2}px`
                    }
               }
            }
        )
    }
)