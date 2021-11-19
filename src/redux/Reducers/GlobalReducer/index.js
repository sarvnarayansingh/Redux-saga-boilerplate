import * as actionConstant from '../../Actions/ActionConstant'

const initialState ={
    user:null
}

export const GlobalReducer = (state=initialState,action) => {
    switch(action.type){
        case actionConstant.GLOBAL_INIT:
            return{
                ...state
            }
            case actionConstant.GLOBAL_SUCCESS:
            return{
                ...state,
                user:action.payload
            }
            case actionConstant.GLOBAL_FAILED:
            return{
                ...state,
                user:action.payload
            }

            default:
                return state
    }

}