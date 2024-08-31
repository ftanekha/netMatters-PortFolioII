$(
    ()=>{
        //////////////////////////////////////////////////
        const $hamburgerMenuIcon = $('#hamburger-button')
        const $sideMenu = $('#side-menu')
        const $sideMenuSupport = $('#side-menu-support')
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
                if($sideMenu.css('display') === 'none'){
                    hamburgerToCross()
                    if($sideMenu.hasClass('slide-out')) $sideMenu.removeClass('slide-out')
                    if($sideMenuSupport.hasClass('slide-out')) $sideMenuSupport.removeClass('slide-out')

                    $sideMenu
                    .addClass(' slide-in')
                    .css('left', 0)

                    $sideMenuSupport
                    .addClass(' slide-in')
                    .css('right', 0)
                }
            }
        )

        $sideMenuSupport.on(
            'click', 
            ()=> {
                crossToHamburger()

                $sideMenuSupport
                .removeClass('slide-in')
                .addClass(' slide-out')

                $sideMenu
                .removeClass('slide-in')
                .addClass(' slide-out')
            }
        )
    }
)