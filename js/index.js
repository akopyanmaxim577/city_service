const open = document.getElementById('menu_open');
const menu = document.getElementById("burger_menu_top");
const close = document.getElementById("close");

const w_link = document.querySelectorAll("#link")


open.addEventListener('click', function () {
    menu.classList.add('db')
})

close.addEventListener('click', function () {
    menu.classList.remove('db')
})

w_link.forEach(n => n.addEventListener('click', function () {
    menu.classList.remove('db')
  }))
