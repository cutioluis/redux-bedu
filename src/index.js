import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

/* Paso 1 Importar nuestro createStore and Provider */
/* Crear un Almacenamiento */
import { createStore } from 'redux';
import { Provider } from 'react-redux';

/* Exportar nuestros reducers */
import reducers from './reducers';


const store = createStore(
  reducers, /* Todos nuestros redecuers */
  {} /* Estado inicial */
)


/* Usar nuestro PROVIDER para usar el store dentro de nuestra App */
/* Dentro de Provider le pasamos el Store para que sepa que App esta usando
el store */

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
