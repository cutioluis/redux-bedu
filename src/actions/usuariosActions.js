export const traerTodos = () => (dispatch /* Dispaath para disparar nuestraaction */) => {
    dispatch({
        type: 'traer_usuarios',
        payload: [1,2,3]
    })
}