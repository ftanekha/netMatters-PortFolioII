function animateScrollDownButtonInfo(){
    const [scrollDownInfoElementScroll, scrollDownInfoElementsDown] = document.querySelectorAll('small.scroll-info')
    const scrollDownButton = document.querySelector('span.glyphicon.glyphicon-circle-arrow-down')

    scrollDownButton.addEventListener(
        'mouseover',
        ()=> {
            const interval = setInterval(
                ()=>{
                    scrollDownInfoElementScroll.style.visibility = scrollDownInfoElementScroll.style.visibility === 'hidden' ? 'visible' : 'hidden'
                    scrollDownInfoElementsDown.style.visibility = scrollDownInfoElementScroll.style.visibility === 'visible' ? 'hidden' : 'visible'
                 }, 1200
            )
            const timeout = setTimeout(
                ()=> {
                    clearInterval(interval)
                    document.querySelectorAll('small.scroll-info').forEach(el => el.style.visibility = 'hidden')
                    clearTimeout(timeout)
                }, 6000
            )
        }
    )
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export {animateScrollDownButtonInfo}