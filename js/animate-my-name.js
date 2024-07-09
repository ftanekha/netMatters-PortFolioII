$(
    ()=>{
        const $myName = $('b#my-name')
        const $myTitle = $('strong#my-title')
        $myName.fadeOut(500).fadeIn(2000)
        $myTitle.fadeOut(1000).fadeIn(3000)
    }
)