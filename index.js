console.log('hello')

function test(){
    console.log('HI')
}

window.addEventListener('scroll', function(){
    const navElement = this.document.getElementById("nav-js")
    const bannerElement = this.document.getElementById("banner-js")
    const totalHeight = navElement.offsetHeight + bannerElement.offsetHeight //Calculate total height of 2 elements
    const currentHeight = document.documentElement.scrollTop

    if(currentHeight >= totalHeight - 350){
        navElement.classList.add("fixed-header")
    }else{
        navElement.classList.remove("fixed-header")
    }

    console.log(totalHeight)
})