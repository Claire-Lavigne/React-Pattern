// == Import : npm
import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';


// == Import : local
import Blog from 'src/components/Blog';

const rootComponent = <Blog />;

// == Render
// 2. La cible du DOM (là où la structure doit prendre vie dans le DOM)
const target = document.getElementById('root');

// Le rendu de React => DOM
render(rootComponent, target);
