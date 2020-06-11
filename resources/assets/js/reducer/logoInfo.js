export default (state = {}, action) => {
    console.log(action)
    switch(action.type){
        case 'SET_LOGONAME':
            return { ...state, name: action.value};
        case 'SET_LOGOBUSINESSNAME':
            return { ...state, business: action.value};
        case 'GET_INFO':
            console.log({...state})
            return {... state};
    }
    return state
}
