$(
    ()=>{
        const hasBannerTextBeenAnimated = localStorage.getItem('hasBannerTextBeenAnimated')
        if(!hasBannerTextBeenAnimated){
            const $myName = $('b#my-name')
            const $myTitle = $('strong#my-title')
            $myName.fadeOut(1000).fadeIn(2000)
            $myTitle.fadeOut(2000).fadeIn(2000)

            localStorage.setItem('hasBannerTextBeenAnimated', true)
        }
    }
)