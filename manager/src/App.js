import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import Router from './Router';


class App extends Component {

    componentWillMount(){
        const config = {
              apiKey: 'AIzaSyDLPjlxLuSsAs7BM5rCIIbP-m2ISgG1WsI',
              authDomain: 'manager-2580e.firebaseapp.com',
              databaseURL: 'https://manager-2580e.firebaseio.com',
              projectId: 'manager-2580e',
              storageBucket: 'manager-2580e.appspot.com',
              messagingSenderId: '768737691726'
         };


        firebase.initializeApp(config);
    }

    render(){
        const store = createStore(reducers,{},applyMiddleware(ReduxThunk));
        return(
            <Provider store = {store} >
                <Router />
            </Provider>
        );
    }

}

export default App;
