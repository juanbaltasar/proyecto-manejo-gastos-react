const initState= {
    Operations: [],
    AmountSaved: 0
}

const MainReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_OPERATION':
            return{
                ...state,
                Operations: [...state.Operations, action.data]
            }
        case 'DELETE_OPERATION':
            return{
                ...state,
                Operations: state.Operations.filter((value) => { return value.Id !== action.data})
            }
        case 'ADD_AMOUNTSAVED':
            return{
                ...state,
                AmountSaved: state.AmountSaved + action.data
            }
        case 'SUBSTRACT_AMOUNTSAVED':
            return{
                ...state,
                AmountSaved: state.AmountSaved - action.data
            }
        default:
            return state;
    }
}

export default MainReducer