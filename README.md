- Problème de nom de package npm @mozaic-ds/sketch-librairies au lieu de libraries
- Pas d'indications pour l'utilisation dans une app React. Tuto utilisé et adapté:
  - https://dev.to/puritanic/add-postcss-to-create-react-app--5hj8
- Problème d'import des icones du package, on devrait avoir accès aux composants compilés mais on a les sources. J'utilise un workaround pour copier les sources dans mon projet


# React Mozaic

Reac components using Mozaic

## Table of Contents

- [React Mozaic](#react-mozaic)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Development](#development)


## Installation

``` bash
# clone repo
$ git clone [Repo URL] react-mozaic

# go into app's directory
$ cd react-mozaic

# install app's dependencies
$ yarn install
```

## Development

``` bash
# Start dev server with hot reload at localhost:3000.
$ yarn start
```

``` bash
# Run storybook for components demo
$ yarn storybook
```