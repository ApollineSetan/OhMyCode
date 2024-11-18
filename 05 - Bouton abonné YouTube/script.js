const icone = document.querySelector('i');
const btnButon = document.querySelector('.btn');


btnButon.addEventListener('click', function(){
    icone.classList.toggle('fa-smile-wink');
    icone.classList.toggle('happy');
    if (btnButon.innerText === "Abonné !"){
        btnButon.innerText = "Abonnez-vous !";
    } else {
        btnButon.innerText = "Abonné !";
    }
});

// icone.classList.toggle('fa-smile-wink');
// élément concerné avec icone.
// accès aux classes avec classList
// fait alterner avec toggle 
// classe à ajouter ou à enlever

btnButon.addEventListener('click', function(){
    btnButon.classList.toggle('abonne');
});