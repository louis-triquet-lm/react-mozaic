# React Mozaic

Reac components using Mozaic.

## Table of Contents

- [React Mozaic](#react-mozaic)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Development](#development)
  - [Notes](#notes)


## Installation

``` bash
# clone repo
$ git clone git@github.com:louis-triquet-lm/react-mozaic.git react-mozaic

# go into app's directory
$ cd react-mozaic

# install app's dependencies
$ yarn install
```

## Development

``` bash
# Run storybook for components demo and develop
$ yarn storybook
```

## Notes

- I used this tutorial to integrate PostCSS to my React app:
  - https://dev.to/puritanic/add-postcss-to-create-react-app--5hj8
- I cannot use React Icon components from mozaic react icons library. Icon code should be compiled for React devs to be able to import them directly from package.
  - As a first workaround I used a script to copy react icons file to my app sources but file is to huge and storybook doesn't compile. For the moment I just copy the icons I need from mozaic file to my project.

