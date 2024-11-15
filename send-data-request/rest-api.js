/*
    => REST API est utilise uniquements pour gerer des ressources

    CRUD : create read update delete
    // 1-  create => insert/add
    method:POST , data : body de la requete , [json format est recommende] ,
     url : /ressource en minisucules avec 's' a la fin
     => on renvoie la ressource inseree en json
     // 2- read (all)
     method : GET , pas de data, url : /ressource en minisucules avec 's' a la fin
     // 2 - read (single ressource)
       method : GET , data sera uniquement l identifiant de la ressource,
        url : /ressource en minisucules avec 's' a la fin/id => /etudiants/cd123
    // 2- read (all) avec des filtres (exemple je veux recuperer les ressources en ordre croissant)
     method : GET , data du filtrage dans le query param, url : /ressource en minisucules avec 's' a la fin
     exemple: /students?order=asc&limit=10

     //3 - update
     method : PUT OU PATCH , data a modifier dans le body.  url : /ressource en minisucules avec 's' a la fin
     // identifiant de la ressource a modifier est dans le url. 
     exemple : body: json format of data to change { "name" :"ali","age":30} et url /students/cd123
    => on renvoie la ressource modifiee en json
     /4- delete
     method: delete , data sera uniquement l identifiant de la ressource. 
      url : /ressource en minisucules avec 's' a la fin/id => /etudiants/cd123
       => on renvoie la ressource supprimeee en json
*/