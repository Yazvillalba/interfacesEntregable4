var btn = document.getElementById('reveal');
var box = document.getElementById('contrasena');
var fak = document.getElementById('fakepass');

var box2 = document.getElementById('contrasena-login');
var btn2 = document.querySelector('.rev2');
var fak2 = document.querySelector('.fak2');
const isEmpty = str => !str.trim().length;

// REGISTRO
btn.addEventListener('click', function () {
    fak.innerHTML = '';
    var x = box.value.length;
    for (var i = 0; i < x; i++) { fak.innerHTML = fak.innerHTML + '&bullet;'; }
    fak.classList.toggle('scan');
    this.classList.toggle('open');
    box.classList.toggle('active');
    (box.type == 'password') ? box.type = 'text' : setTimeout(function () { box.type = 'password' }, 500);;
});

box.addEventListener("input", function () {
    if (!isEmpty(this.value)) btn.removeAttribute('disabled'); else btn.setAttribute('disabled', 'disabled');
});
// LOGIN
btn2.addEventListener('click', function () {
    fak2.innerHTML = '';
    var x = box2.value.length;
    for (var i = 0; i < x; i++) { fak2.innerHTML = fak2.innerHTML + '&bullet;'; }
    fak2.classList.toggle('scan');
    this.classList.toggle('open');
    box2.classList.toggle('active');
    (box2.type == 'password') ? box2.type = 'text' : setTimeout(function () { box2.type = 'password' }, 500);;
});
box2.addEventListener("input", function () {
    if (!isEmpty(this.value)) btn2.removeAttribute('disabled'); else btn2.setAttribute('disabled', 'disabled');
});