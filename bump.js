
if(message.guild.id === "ID de ton serveur"){
    if(message.author.id === "302050872383242240"){
      let auteur = message.embeds[0].description.substr(2, 18)
      let msgrequis = "Bump effectué !"
      if(message.embeds[0].description.includes(msgrequis)){
      // N'oublier pas de rajouter votre fonction si vous voulez donner des crédits à la personne qui bump votre serveur !
      // Exemple avec quick.db :
      //db.add(votrefonction_${auteur.id}, 10) 
       message.channel.send(`<@${auteur}> vous avez gagné un truc !`)
      }else if(message.embeds[0].description.includes("avant que le serveur puisse être bumpé !")){
        message.channel.send(`<@${auteur}> vous n'avez rien gagné !`)
      }
    }
  }
