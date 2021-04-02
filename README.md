# B.A.R.T.

![image](https://github.com/QuentinGib/Web_BART/blob/main/client/public/img/logoBART.png)

Notre projet proposé par l’entreprise Onepoint est nommé “BART” pour Blockchain Activity Reporting Tool”.
Ce projet s’inscrit dans la transformation numérique des entreprises et des organisations.
Le but de ce projet est de numériser et donc d’optimiser des outils de reporting de service pour une boîte de consulting en s’appuyant sur la technologie blockchain.

Que cela soit en audit, en ressources humaines ou bien encore pour aider à la transition numérique d’une entreprise, il n’est pas rare de faire appel à un consultant. Employé par une structure, il aide durant sa mission une entreprise à accomplir une tâche dans laquelle il est qualifié. Cependant, un consultant va provoquer de nombreuses actions administratives, que cela soit la création et la revue de son rapport d’activité ou bien la gestion des factures , beaucoup de temps et de papier vont être gâchés à la fois chez la structure du consultant, mais aussi chez l’entreprise ou il demeure. C’est pourquoi, nous avons développé BART.

Bart est une application Web développée en partenariat avec l’entreprise Onepoint et qui repose sur la technologie de la blockchain pour optimiser le reporting d’activité.

L’utilisation de la technologie prend tout son sens au sein de notre projet car nous somme face à un service avec 3 parties prenantes; Onepoint , les clients faisant appels à des services et enfin les ressources ayant les compétences pour répondre à ces services.
Pour éviter tout désaccord entre les parties, il est nécessaire que chacun conserve les informations le concernant dans leurs propres registres et les accordent avec celles des autres parties. D’où l’utilité d'employer une blockchain pour cela qui permet d’avoir un seul registre partagé, publique et immuable et supprime des intermédiaires et donc des coûts.

Nous utilisons la blockchain française Tezos, qui possède différents avantages non négligeable par rapport à d’autres blockchain plus connues comme ethereum par exemple.
Parmis ces avantages il y a principalement le consensus Proof of Stake qui limite la consommation en énergie du minage, la gouvernance “On-chain” qui permet de modifier la blockchain sans avoir à effectuer de fork et enfin le langage Michelson pour les smart-contrat qui permet d'effectuer une vérification formelle sur ces derniers à l’aide de scénario de test.

Pour conclure, Bart garantit aux entreprises, aux ressources et aux clients une information certifiée et immuable. Désormais, chaque information est transmise instantanément, sans intermédiaire, et disponible pour tous. Pour cela, vous n’avez qu'à vous connecter sur notre plateforme et en quelque clic, vous pourrez à la fois faire appel à un consultant pour une mission mais également valider le travail des vos consultants, demander une extension de contrat ou bien encore proposer une mission.

## Lancement

Cette application web n'est pas encore déployée, il faudra donc la lancer en local pour y avoir accès.

Pour lancer la partie serveur, se placer le dossier `server` et taper la commande `npm run dev`.  

Pour lancer la partie client, se placer le dossier `client` et taper la commande `npm start`.  
Puis cliquer sur l'adresse du site en local qui est donnée.

La base de données est à construire au préalable sur MySQL, le script est fournie dans `ConstructionDB.sql`.

Le smart contract de ce projet est déployé sur le testnet de Tezos `florencenet` à l'adresse `KT18mRnj6mgs95s8CzPsafvkqhvoiSfbUPN2`. Le code est également fourni dans `bart_contract.py`.

## Architecture du site

![image](https://github.com/QuentinGib/Web_BART/blob/main/client/public/img/Architecture.PNG)


## Fonctionement du Smart-Contract

L'adresse utiliser pour déployer le smart-contrat est enregistrée comme ‘admin’ et est donc la seule à avoir la possibilité d’appeler les deux fonctions suivantes:
`setAdmin(address)` qui permet de changer le wallet ‘admin’ du contrat.  
`addUserWhitelist(address,0)` , permet d’ajouter de nouvelles adresses à la whitelist.  
Ces adresses seront celles qui ont la possibilité de faire de nouveau contrat.  
Les adresses sur la whitelist peuvent donc appeler la fonction `newContrat()`.  
Cette fonction prend en paramètres toutes les informations nécessaires à la constitution d’un contrat:  
- adresse du client
- adresse de la ressource
- TJM
- temps de la mission
- id du contrat  
mais aussi différent booléen initialisé à ‘False‘ qui serviront à valider les différentes étapes de la vie du contrat.
Pour cela il y a les fonctions `validateContratClient()` , `validateContratRessource()` et `validateActivity()` qui prennent a chaque fois en argument l’id du contrat. Ces fonctions ne sont pas restreintes par une whitelist mais seul les adresses enregistrées dans un contrat particulier seront capables d'interagir avec ce dernier en fonction de leur position ( ressource ou client).

