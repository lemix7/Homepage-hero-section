let openMenu = document.getElementById('menu')
let closeMenu = document.getElementById('close-btn')
let menuItems = document.getElementById('menu-items')

openMenu.addEventListener('click',()=>{
    menuItems.classList.remove('hidden')
})

closeMenu.addEventListener('click',() =>{
    menuItems.classList.add('hidden')
})



