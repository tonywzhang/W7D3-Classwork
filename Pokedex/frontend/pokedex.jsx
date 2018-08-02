import React from 'react';
import ReactDOM from 'react-dom';
import {fetchAllPokemon} from './util/api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  window.fetchAllPokemon = fetchAllPokemon;
  ReactDOM.render(<h1>This is me</h1>, root);
  // ReactDOM.render(<Root />, root);
});
