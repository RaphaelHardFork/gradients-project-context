# Projet Gradients

[Lien vers notre site](https://gradients-project-start-black-team.netlify.app/)

Dans ce challenge vous avez pour but de construire une application web _monopage_ [comme celle-ci.](https://alyra-gradients-bonus.netlify.app/)

**Vous devez utiliser [ce repo](https://github.com/pehaa/gradients-project-start) pour démarrer** (fork, clone & yarn). Ci-dessous, vous trouverez quelques indications qui vous aideront à structurer votre projet.

## CRA - configuration initiale

- Bootstrap est déjà installé et intégré (`./src/index.js`)
- La partie "meta" (title, lang, etc.) est déjà mise en place (`./public/index.html`)
- Le fichier `./src/gradient.js` exporte deux variables `gradients` et `uniqueTags`.

  ```js
  export const gradients = [
    {
      name: "Grade Grey",
      start: "rgb(189, 195, 199)",
      end: "rgb(44, 62, 80)",
      tags: ["gris"],
    },
    {
      name: "Harvey",
      start: "rgb(31, 64, 55)",
      end: "rgb(153, 242, 200)",
      tags: ["vert"],
    },
    {
      name: "Rainbow Blue",
      start: "rgb(0, 242, 96)",
      end: "rgb(5, 117, 230)",
      tags: ["vert", "bleu"],
    },
    ...
  ]
  ```

---

- Structure initiale de projet

```bash
src
├── App.js
├── components
│   ├── Footer.js
│   ├── Gradient.js
│   ├── GradientCode.js
│   ├── GradientPill.js
│   ├── GradientTitle.js
│   ├── GradientsApp.js
│   ├── GradientsList.js
│   └── GradientsSelect.js
├── gradients.js
...
```

## À faire :

![](https://wptemplates.pehaa.com/assets/alyra/gradients-app.png)

![](https://wptemplates.pehaa.com/assets/alyra/gradient.png)

En respectant la structure des components comme ci-dessus, réaliser les étapes suivantes :

1. Afficher tous les gradients (25).

<details>
  <summary>Comment ? 🤔 (cliquer ici pour quelques astuces)</summary>
  <p>✨ Pour ceci il faudrait importer la variable <code>gradient</code> depuis <code>./src/gradients.js</code> et la parcourir avec la méthode <code>map</code>.</p>
  <p>✨ Vous pouvez utiliser la propriété <code>name</code> pour l'attribut <code>key</code>.</p>
</details>

---

2. Modifier le component `Gradient`. Ajouter les boutons pour les tags de chaque dégradé.

![](https://wptemplates.pehaa.com/assets/alyra/gradients-tags.png)

---

3. Ajouter le component `GradientsSelect`. Il devrait contenir un élément `<select>` qui permettera de filtrer les dégradés par tag ("tous", "gris", "vert", ...).

<details>
  <summary>Comment ? 🤔</summary>
  <p>✨ Vous devez importer la variable <code>uniqueTags</code> depuis <code>./src/gradients.js</code></p>
  <p>🕵 N'hésitez pas à "inspecter l'élément" pour retrouver le markup de cette partie de la page.</p>
</details>

---

4. Ajouter le component `GradientsHeader`

<details>
  <summary>🤔</summary>
  <p>✨ Vous pouvez vous servir de <a href="https://codepen.io/alyra/pen/rNepaOy" target="_blank" rel="noopener">ce pen.</a></p>
</details>

---

5. Mettre en place la fonctionnalité **"filtrer par tag".**

<details>
  <summary>🤔</summary>
  <p>✨ Ce qui définit le <i>state</i> de notre application est la valeur de filtre (le tag choisi). Ce pourait être alors
  <code>const [filter, useFilter] = React.state("tous")</code>
  </p>
</details>

---

## Validation (/10):

**[le site de référence](https://alyra-gradients-bonus.netlify.app/)**

- rendu sur GitHub et déploiement sur Netlify
- la structure des components est respectée (/1)
- le design est respecté (/1)
- l'ensemble des dégradés sont affichés correctement dans la page (/1)
- le header est fonctionnel (/3)
  - le bouton _"refresh"_ est fonctionnel (1/3)
  - les boutons _"next/prev"_ sont fonctionnels (2/3)
- le select est fonctionnel et permet de filter des dégradés par tag (/2)
- les boutons sont fonctionnels et permettent de filter des dégradés par tag (/1)
- il n'y a pas de warning depuis la console dans VSCode, ni dans la console du navigateur (/1)
- [le html est valide (validator w3c)](https://validator.w3.org/nu/)

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
# gradients-project-start
# gradients-project-start
