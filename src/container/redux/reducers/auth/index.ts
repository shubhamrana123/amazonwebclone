import { LOG_IN, LOG_OUT } from "../../action-types"

const initialState = {
    isSignedIn :false
}
export const authReducers  = (state=initialState,action:{type:any,payload:any}) =>{
switch(action.type){
    case LOG_IN : return {
        ...state,
        isSignedIn:true
    }
    case LOG_OUT : return {
        ...state,
        isSignedIn :false
    }
    default : return {
        ...state
    }
}
}