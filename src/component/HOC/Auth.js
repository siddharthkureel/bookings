import React from 'react'
import { firebase } from "../../firebase";
import {  Redirect } from 'react-router-dom';
export default (ChildComponent) =>{
    class ParentComponent extends React.Component{
        state={
            user:{}
        }
        componentDidMount = async ()=>{
            await firebase.auth().onAuthStateChanged((user) => {
             this.setState({user})
            })
        }
        render(){
            if(this.state.user){
                return <ChildComponent {...this.props}/>
            }
            return <Redirect to='/signin' />          
        }
    }
    return ParentComponent;
}
