// Cette fois ci, les éléments n'ont pas d'id. C'est une classe qui leur apporte les styles. Au lieu de les cibler par id, JavaScript nous permet de les cicler par classe
// document.querySelector('.btn-success');
// Dans le DOM avec document.
// Sélection du premier élément avec .querySelector
// Avec la classe .btn-success

// bouton btn-success
const btnSuccess = document.querySelector('.btn-success');
const btnDeny = document.querySelector('.btn-deny');
console.log(btnSuccess);
console.log(btnDeny);

// DIV cookies
const cookies = document.querySelector('.cookies');
console.log(cookies);

btnSuccess.addEventListener('click', function(){
console.log('bouton cliqué!');
cookies.style.opacity = "0";
});

btnDeny.addEventListener('click', function(){
    console.log('bouton cliqué!');
    cookies.style.opacity = "0";
})

btnSuccess.addEventListener('mouseover', function(){
    btnSuccess.style.backgroundColor = "#434f7d";
})

btnSuccess.addEventListener('mouseout', function(){
    btnSuccess.style.backgroundColor = "#1E2337";
})

btnDeny.addEventListener('mouseover', function(){
    btnDeny.style.backgroundColor = "#d1d1d1";
})

btnDeny.addEventListener('mouseout', function(){
    btnDeny.style.backgroundColor = "grey";
})