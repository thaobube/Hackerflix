# Translate into English
## Description of the challenge

### Static JavaScript
- We are making a site for fans of movies that talk about "hacking"
- The page is just a large mosaic of movie covers, much like Netflix but simpler
- use the data present in [movies.js] (https://github.com/ltruchot/es3-to-esnext-challenges/blob/master/007-hackerflix/movies.js)
  - export them from a file
  - import them into your script.js
- copy the `posters` folder to your` static` folder (here is a [download link] (https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/ltruchot/ es3-to-esnext-challenges / tree / master / 007-hackerflix / posters))
- all "imbd posters" of the films are visible on your home page in a large "flex-wrap" container
- ATTENTION: some films do not have a "poster" (their `img` property is then` false`). In this case, a colored rectangle replaces the image, and the movie title is written in this rectangle.

### dynamic javascript
- clicking on a "poster" opens a popup: a centered div, above the elements, in fixed position
- This popup displays all the information available for the clicked movie
- This popup contains a "close" button: click on the cache again
- We can of course find this popup several times in a row, by clicking on different films
- There is a button at the top of the site: "Recent film only"
- Clicking on it hides all the covers of films made before the year 2000

## Bonus (not counted in the JS exam)
- A "select" field allows you to filter the films by genre: you choose your genre and you only see the films concerned
- the first choice in this select is "see all", to be able to return to the initial state
- another select allows to classify the films by "ratings", decreasing or increasing (the genre filter remains active)
- At the top of the site, a small carousel "showcases" 10 films drawn at random (3 visible, 7 invisible, which rotate in the carousel)
- All covers have a small "empty heart" icon: click on the filled one and vice versa (without opening the popup)
- "like" films (by clicking on this heart) dynamically changes the content of the "highlights" of the carousel
  - according to the user's tastes, only films of the same "genre" are offered in the carousel
- The status of the app is saved in the localStorage
- It's all beautiful, original, ergonomic and responsive

> Workshop freely inspired by the [hackermovie.club] site (https://hackermovie.club/)



# Parcel seed

> A very simple seed to start a modern Single Page App development in no time
> 
## how to use

First use:
- npm install
- npm start

Next use:
- npm start

Before final deploy:
- npm run build
- profit?

## ESlint

To fully enjoy ESlint, please
- install the official VSCode "ESlint" extension
- add this to your VSCode settings:
```json
  //...
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  //...
```

## JQuery and Bootsrap for quick POCs 

If needed, you can uncomment `bootstrap` + `jquery` imports in
- script.js
- style.scss
  
If you don't need them at all, you can remove thoses comments. Then in `package.json`:
  - remove deps
    - popper.js
    - bootstrap
    - jquery

# Hackerflix and chill
## Consignes de base
- utiliser notre [seed parcel](https://github.com/ltruchot/parcel-seed-js-eslint-sass) 
  - `git clone https://github.com/ltruchot/parcel-seed-js-eslint-sass`
  - renommer ce dossier "hackerflix", l'ouvrir avec VSCode, supprimer ".git" ?? la racine
  - ouvrir un terminal, puis
    - `npm install`
    - `npm start`
  - ouvrir le navigateur sur http://localhost:1234 
- clean le projet
  - d??-commenter le lien vers bootstrap dans styles.scss
  - supprimer les mentions de jquery et bootstrap dans script.js
  - supprimer le html inutile (mais garder la div#app)
- **interdit de toucher le HTML** durant tout le reste de l'exercice: tout le HTML appara??t dans la div#app !
  
## Description du challenge

### Javascript statique
- Nous faisons un site pour les fans de films qui parlent de "hacking"
- La page est juste une grande mosa??que de jaquettes de films, un peu comme Netflix en plus simple
- utiliser les donn??es pr??sentes dans [movies.js](https://github.com/ltruchot/es3-to-esnext-challenges/blob/master/007-hackerflix/movies.js)
  - les exporter depuis un fichier
  - les importer dans votre script.js
- copier le dossiers `posters` dans votre dossier `static` (voici un [lien de t??l??chargement](https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/ltruchot/es3-to-esnext-challenges/tree/master/007-hackerflix/posters))
- tous les "posters imbd" des films sont visibles sur votre page d'accueil dans un grand container en "flex-wrap"
- ATTENTION: certains film n'ont pas de "poster" (leur propri??t?? `img` est alors ?? `false`). Dans ce cas, un rectangle color?? remplace l'image, et le titre du film est ??crit dans ce rectangle

### Javascript dynamique
- cliquer sur un "poster" ouvre une popup: une div centr??e, au dessus des ??lements, en position fixed
- Cette popup affiche toutes les infos disponibles pour le film cliqu??
- Cette popup contient un bouton "fermer": cliquer dessus la cache de nouveau
- On peut bien s??r retrouver cette popup plusieurs fois d'affil??, en cliquant sur diff??rents films
- Il y a un bouton en haut du site: "Recent film only"
- Cliquer dessus cache toutes les jaquettes de films r??alis??s avant l'an 2000

## Bonus (non compt?? dans l'??preuve JS)
- Un champ "select" permet de fitrer les films par genre: on choisit son genre et on ne voit plus que les films concern??s
- le premier choix dans ce select est "tout voir", pour pouvoir revenir ?? l'??tat initial
- un autre select permet de classer les films par "notes", d??croissantes ou croissantes (le filtre de genre reste actif)
- En haut du site, un petit carousel "mets en avant" 10 films pioch??s au hasard (3 visibles, 7 invisibles, qui tournent dans le carousel)
- Toutes les jaquettes ont une petite ic??ne "coeur vide": cliquer dessus le rempli et vice-versa (sans ouvrir la popup)
- "aimer" des films (en cliquant sur ce coeur) change dynamiquement le contenu des "mises en avant" du carousel
  - selon les go??ts de l'utilisateur, uniquement des films du m??me "genre" sont propos??s dans le carousel
- L'??tat de l'app est enregistr?? dans le localStorage
- Tout ??a est beau, original, ergonomique et responsive

> Workshop librement inspir?? du site [hackermovie.club](https://hackermovie.club/)
