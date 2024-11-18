const switchBox = document.querySelector('.switch');
const btn = document.querySelector('.btn');
const icone = document.querySelector('i');
const container = document.querySelector('.container');
const titre = document.querySelector('h1');
const corps = document.querySelector('body');


switchBox.addEventListener('click', function(){
    console.log('DIV cliquée!');
    btn.classList.toggle('btn-change');
    icone.classList.toggle('icone-change');
    icone.classList.toggle('fa-sun');
    container.classList.toggle('container-change');
    corps.classList.toggle('body-change');
    if (titre.innerText === "Dark Mode"){
        titre.innerText = "Light Mode";
    } else {
        titre.innerText  = "Dark Mode";
    }
});