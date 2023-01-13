const open = document.getElementById('menu_open');
const menu = document.getElementById("burger_menu_top");
const close = document.getElementById("close");
const w_link = document.querySelectorAll("#link");
const order = document.getElementById("order")


open.addEventListener('click', function () {
    menu.classList.add('db')
})

close.addEventListener('click', function () {
    menu.classList.remove('db')
})

w_link.forEach(n => n.addEventListener('click', function () {
    menu.classList.remove('db')
}))

//Mail JS

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_osenaby';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Відправленно');
      document.getElementById('form').reset();
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});