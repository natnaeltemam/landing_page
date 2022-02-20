myside=document.getElementById('mySidebar')
main=document.getElementById("main")
cont=document.getElementById("mainhead")

main.addEventListener('click',e => {
    if (myside.classList.contains('myside12')){
        myside.classList.remove('myside12')
        cont.classList.remove('mainslide12')
    }
    else{
        myside.classList.add('myside12')
        cont.classList.add('mainslide12')
        
    }
    
    
})
console.log("Naty");