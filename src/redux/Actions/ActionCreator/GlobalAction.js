import * as actionType from '../ActionType'
import axios from 'axios'

export const globalAction = () => async (dispatch, getState) => {
    dispatch(actionType.globalInit())
    await axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res=>{
        return(
            dispatch(actionType.globalSuccess(res.data))
        )
    })
    .catch(error => {
        return dispatch(actionType.globalFailed())
    })

}