# Quick Front-end environment setup (Webpack 4)
A quick step-by-step guide on setting up front-end environment. All configuration is based on `Webpack 4`.

It includes packing `html`, `css`, `scss`, `javascript (Support ES6)`, `images`. Also it has achieved `hot-reload`.

***Before getting start, make sure you have installed npm globally. ***

## Steps
### 1. Fork this repository
`cd ${rootPath}`

### 2. Install Webpack4 & Webpack CLI
```npm install webpack webpack-cli --save-dev```

```webpack -v``` (Make sure it's version 4)

### 3. Install dependencies
```npm install```

### 4. Run project
+ To start project in dev mode, just run ```npm start```. After compile, you can see project on browser by `http://localhost:8080` (The port may different).
+ To build project into production, run ```npm build```.

## Structures
```
    |-- src
    |   |-- css
    |   |-- js
    |   |   |-- index.js    // Entry points
    |   |   |-- _common.js  // Register all globally running script.
    |   |-- img
    |   `-- index.html
    |...
```
To import new style file, just add files into `css` folder, then import it into `index.js`, like

```import '../css/${fileName}'```

## References 
+ [Webpack 4](https://webpack.js.org/guides/getting-started/)
+ [Normalize.css](https://necolas.github.io/normalize.css/)