// Au clic sur l'icône, la div modal descend jusqu'en bas de l'écran et l'icône se modifie en croix
// Au clic suivant, la div modal remonte jusqu'en haut de l'écran et l'icône reprend sa forme d'origine (menu burger)

const icone = document.querySelector('.navbar-mobile i');
console.log(icone);
const modal = document.querySelector('.modal');
console.log(modal);

icone.addEventListener('click', function(){
    console.log('cliqué');
    icone.classList.toggle('change-modal');
    icone.classList.toggle('fa-times');
});