# Mobile-Hybrid-Project

INFORMATIONS

Groupe : Antoine MILLET
Presence au cour : NON

Voici une application qui vous permettra de sauvegarder vos carte de fidélité. 2 possibilités pour cela :

1 - Scanner une carte, l'appareil photo s'ouvre et vous permet de scanner votre carte. Une fois le code lu un QRCode et généré et stocker.

2 - Choisir une photo de votre librarie photo. 

Malheuresement, je n'ai pas reussi a aller aussi loin que ce que je le souhaitais nottament du fait que je ne n'avais aucune notion de TypeScripr et ionic.

J'ai cependant essayer de remplir au mieu la consigne en implémentant :

- L'utilisation de Firebase en BackEnd
- Un systeme de connection - > authent
- L'accés aux photos (IOS) -> Stockage des photos sur firebase 
- La prise de photo (IOS) -> Stockage des photos sur firebase 
- La posibilité de modifier les inforation du compte 


DOCUMENTATION UTILISATEUR 

I - Conexion

Si vous avez deja un compte il vous suffira de remplir les informations et de se connecter 

II - Création de compte 

Si vous n'avez pas encore de compte, il suffit de cliquer sur "Create a new account" et de remplir les différents champ avant de valider. Vous devrez entrer une adresse email valide et un mot de passe de 6 caractères minimum.

III - Mot de passe oublier 

Si vous avez oublié votre mot de passe, il vous suffit de cliquer sur "I forgot my password" et de saisir votre adresse. // A vérifier

IV - Accés a son profil 

Si vous souhaiez voir les différentes informations de votre profil, il vous suffira de cliquer sur l'icon du menu en haut a gauche et de cliquer sur profil.
Une fois sur la page menu vous avez la possbilité de modifier les informations uniquement en saisissant les nouvelles informations et en validant.
Vous aurez aussi la possibilité de changer de mot de passe en cliquant le sur le bouton à cet actif. // A Faire

V - Ajout d'une carte de fidélité 

VI - Consultation de vos cartes 

Si vous souhaitez voir les différentes cartes rensigné rien de plus simple, cliquez sur l'icone menu et selectionné carte.
Vous verrez ainsi la liste de vos différentes carte et en cliquant sur une de celle ci vous verez apparaitre votre carte de fidélité.

VI - Deconnexion 

Pour vous deconnectez rien de plus simple cliquez sur "Log Out " en haut à droite de l'application 

DOCUMENTATION TECHNIQUE 

I- INSTALLATION DU TEMPLATE

## How to use this template

*This template does not work on its own*. The shared files for each starter are found in the [ionic2-app-base repo](https://github.com/ionic-team/ionic2-app-base).

To use this template, either create a new ionic project using the ionic node.js utility, or copy the files from this repository into the [Starter App Base](https://github.com/ionic-team/ionic2-app-base).

### With the Ionic CLI:

Take the name after `ionic2-starter-`, and that is the name of the template to be used when using the `ionic start` command below:

```bash
$ sudo npm install -g ionic cordova
$ ionic start myBlank blank
```

Then, to run it, cd into `myBlank` and run:

```bash
$ ionic cordova platform add ios
$ ionic cordova run ios
```

Substitute ios for android if not on a Mac.

II - FIREBASE

Tout le back-end est geré via firebase
La base de donné regroupant les utilisateurs et informations utilisateurs 
Les images sont stocké sur firebase 


