const btnRed = document.getElementById('btn-red');
const btnBlue = document.getElementById('btn-blue');
let compteur = 0;
let titre = document.getElementById('titre');

// Je soumets le bouton rouge à une action
// btnRed.addEventListener('click', function(){
//     console.log('cliqué!');
//     compteur = compteur + 1;
//     console.log(compteur, "compteur après incrémentation");
// });


// Je soumet le bouton bleu à une action
// btnBlue.addEventListener('click', function(){
//     console.log('cliqué!');
//     compteur = compteur + 1;
//     console.log(compteur, "compteur après incrémentation");
// });

// On crée une fonction pour faciliter l'écriture et la lecture du code

// function add(){
//     compteur = compteur + 1;
//     console.log(compteur, "compteur après incrémentation");
// }

// btnRed.addEventListener('click', function(){
//     add();
// });


// btnBlue.addEventListener('click', function(){
//     add();
// });


// emplacement.innerText = "nouveau texte";
// balise où placer le contenu avec emplacement.
// vouloir insérer du contenu avec .innerText
// définir le contenu que l'on souhaite insérer


function add(){
    compteur = compteur + 1;
    console.log(compteur, "compteur après incrémentation");
    titre.innerText = compteur;
}

setTimeout(function(){
    console.log('fin du chrono!');
    btnRed.remove();
    btnBlue.remove();
    titre.innerText = "Fin du chrono!";
}, 10000);

btnRed.addEventListener('click', function(){
    add();
});


btnBlue.addEventListener('click', function(){
    add();
});