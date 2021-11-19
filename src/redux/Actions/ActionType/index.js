import * as actionConstant from '../ActionConstant'

export const globalInit = () => ({type: actionConstant.GLOBAL_INIT});
export const globalSuccess = (payload) => ({type: actionConstant.GLOBAL_SUCCESS,payload});
export const globalFailed = (payload) => ({type: actionConstant.GLOBAL_FAILED,payload});