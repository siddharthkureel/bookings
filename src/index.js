import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import Header from "./component/navigation/Header.js";
import history from "./history";
import Routes from "./Routes";
import { firebase } from "./firebase";
import { rootReducer } from "./component/reducer";
const App = (props) => {
    return (
        <Router history={history} >
            <Header {...props} />
            <Routes {...props} />
        </Router>
    )
}
firebase.auth().onAuthStateChanged((user) => {
    ReactDOM.render(
    <Provider store={createStore(rootReducer,applyMiddleware(thunk))} >
        <App user={user}/>
    </Provider>
    , document.getElementById('root'));    
})
