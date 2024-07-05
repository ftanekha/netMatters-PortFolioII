$(document).ready(
    ()=>{
        const $hamburgerMenuIcon = $('#hamburger-button')
        const $sideMenu = $('#side-menu')
        ///////////////////////////////////////////////////
        function hamburgerToCross(){
            $('.hamburger-box.left').css({
                rotate: '45deg',
                position: 'relative', 
                top: '9px',
                right: '3px'
            })

            $('.hamburger-box.middle').hide()

            $('.hamburger-box.right').css(
                {
                    rotate: '-45deg', 
                    position: 'relative', 
                    bottom: '9px',
                    right: '3px'
                }
            )
        }
        ///////////////////////////////////////////////////
        function crossToHamburger(){
            //reset css properties
            $('.hamburger-box.left').css({
                rotate: '0deg',
                top: '0',
                right: '0'
            })

            $('.hamburger-box.middle').show()

            $('.hamburger-box.right').css(
                {
                    rotate: '0deg',  
                    bottom: '0',
                    right: '0'
                }
            )
        }
        ////////////////////////////////////////////////////
        $hamburgerMenuIcon.on(
            'click',
            ()=>{
                if($sideMenu.css('display') === 'flex'){
                    hamburgerToCross()
                }else{
                    crossToHamburger()
                }
            }
        )
    }
)