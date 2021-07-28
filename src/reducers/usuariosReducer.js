/* Dar el estado inicial Primeo empieza con un estado inicial */
const INITIAL_STATE = {
    usuarios: [1,2,3]
    /* El arreglo esta vacio */
}


export default (state = INITIAL_STATE, action) => {
    switch(action.payload) {
        case 'traer_usuarios':
        return {
            ...state,
            usuarios: action.payload
        }
        default: return state
    }
}