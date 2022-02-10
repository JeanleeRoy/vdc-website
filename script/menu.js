const menuBtn = document.getElementById('menu-btn')
const closeBtn = document.getElementById('m-close-btn')
const navItems = document.querySelector('.nav-items')

const breakpoint = 870

menuBtn.addEventListener('click', () => {
    if (window.innerWidth <= breakpoint) {
        showMenuItems()
    }
})

closeBtn.addEventListener('click', () => {
    if (window.innerWidth <= breakpoint) {
        hideMenuItems()
    }
})

function showMenuItems() {
    navItems.style.display = "flex"
}

function hideMenuItems() {
    navItems.style.display = "none"
}

window.onresize = () => {
    if (window.innerWidth > breakpoint)
        showMenuItems()
    else hideMenuItems()
}
