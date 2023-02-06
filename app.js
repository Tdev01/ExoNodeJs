const { response } = require('express');
const express = require('express');
const fs = require('fs');
const app = express();
// envoie les requets avec le parametre reponse 
app.get('/', (requete, response) =>{
    response.send('salut !');
})
// fonction qui va lire le fichier avec une boucle avec un message d'erreur 
app.get("/data", (request, response) => {
    // permet de recupérer le fichier que l'on veut lire 
    fs.readFile("data.json", (err, data) => {
    // si le fichier n'est pas lu alors la reponse d'erreur s'affiche
      if (err) {
        response.status(500).json({
          message: "Une erreur lors de la lecture des données",
          error: err
        });
      }
      else {
        response.status(200).json(JSON.parse(data));
      }
    });
  });
// utilisation du port
app.listen(4000, () =>{
    console.log("C'est le port 4000 qui est utiliser")
})

// APP run  -< route (URL) -> (requetes entrantes --> traitement)