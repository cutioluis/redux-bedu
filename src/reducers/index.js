/* Aqui vamos a poner todos nuestros reducers */
import { combineReducers } from "redux";
/* 1 Exportar combineReducers */

/* Aqui exportamos nuestro primero reducer para usarlo en 
el combineReducers */
import usuariosReducer from "./usuariosReducer";

export default combineReducers({
    usuariosReducer
});