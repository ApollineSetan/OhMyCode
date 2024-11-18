console.log("connecté");

// Sélection de lélément à partir de son ID (document.getElementByID('titre'))
// Accès à la propriété color avec .style.color
// Nouvelle valeur souhaitée avec ="green"
// document.getElementById('titre').style.color = "green";
// Plaçong plutôt l'élément amené à changer dans une variable

const titre = document.getElementById('titre');
console.log(titre); // Dans la console, nous visualisons le contenu de la variable titre

titre.style.color= "green";