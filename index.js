console.log('hello')

function test(){
    console.log('HI')
}

window.addEventListener('scroll', function(){
    const navElement = this.document.getElementById("nav-js")
    const carouselElement = this.document.getElementById("carouselExampleCaptions")

    //Calculate total height of 2 elements
    const totalHeight = navElement.offsetHeight + carouselElement.offsetHeight 
    const currentHeight = document.documentElement.scrollTop

    if(currentHeight >= totalHeight - 350){
        navElement.classList.add("fixed-header")
    }else{
        navElement.classList.remove("fixed-header")
    }

    console.log(totalHeight)
})