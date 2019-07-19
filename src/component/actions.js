import { firebase } from "../firebase";
import history from "../history";
export const registerUser = (data)=> async (dispatch) => {
         await firebase.auth().createUserWithEmailAndPassword(data.email,data.password)
        .then((user)=>{
            dispatch({
                type:'REGISTER_USER',
                payload:user
            })
           return history.push('/')
        }).catch((e)=>{
            dispatch({
                type: 'REGISTER_USER',
                payload: e
            })
        })        
}
export const signIn = (data)=> async (dispatch) =>{
    await firebase.auth().signInWithEmailAndPassword(data.email,data.password)
    history.push('/packages')
}