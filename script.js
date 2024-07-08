// Fonction pour construire l'URL de l'API en utilisant le nom de la ville et la clé API
function obtenirUrl(ville) {
    const apiKey = 'bab665f8089679eacf3980ff5f25b0ab';
    return `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=${apiKey}&units=metric`;
}

function changerVille() {
    // Demander à l'utilisateur d'entrer le nom d'une ville
    var ville = prompt('Entrez le nom de la ville');

    // Faire l'URL avec la ville du prompt
    const url = obtenirUrl(ville);
    let requete = new XMLHttpRequest();
    requete.open('GET', url);
    requete.responseType = 'json';

    // Ajouter un gestionnaire d'événements pour traiter la réponse une fois qu'elle est reçue
    requete.onload = function () {
        if (requete.status === 200) {
            // La requête a réussi, traiter la réponse
            let reponse = requete.response;
            let temperature = reponse.main.temp;

            // Mettre à jour le contenu des éléments avec l'ID 'temperature_label' et 'ville' 
            document.querySelector('#temperature_label').textContent = temperature;
            document.querySelector('#ville').textContent = ville;
        } else {
            // Gérer les erreurs de requête
            console.error(`Erreur ${requete.status}: ${requete.statusText}`);
        }
    };

    // Envoyer la requête
    requete.send();
}

// Ajouter un événement pour le bouton de changement de ville
document.querySelector('#changer').addEventListener('click', function () {
    changerVille();
});

// Appeler la fonction pour afficher la météo de la ville initiale
changerVille();
