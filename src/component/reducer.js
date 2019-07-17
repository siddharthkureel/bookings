import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';
const userReducer = (state={},action)=>{
   if(action.type==='REGISTER_USER'){
      return { ...state,...action.payload }
   }
   if(action.type==='SIGNIN_USER'){
      return {...state,...action.payload}
   }
   if(action.type==='SIGNOUT__USER'){
      return {...state,...action.payload}
   }
   return state
}



export const rootReducer =  combineReducers({
   userReducer,
   form:formReducer
})