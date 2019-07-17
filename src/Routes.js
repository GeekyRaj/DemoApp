import React, {Component} from 'react';
import {Router, Stack, Scene,Modal,Reducer} from 'react-native-router-flux';

import Login from './pages/Login';
import Signup from './pages/Signup';

const reducerCreate = params => {
  const defaultReducer = new Reducer(params);
  return (state, action) => {
    console.log('reducer: ACTION:', action);
    return defaultReducer(state, action);
  };
};

const stateHandler = (prevState, newState, action) => {
  console.log('onStateChange: ACTION:', action);
};


const getSceneStyle = () => ({
  backgroundColor: '#F5FCFF',
  shadowOpacity: 1,
  shadowRadius: 3,
});


export default class Routes extends Component {
    render(){
        return(
          <Router  createReducer={reducerCreate}
          onStateChange={stateHandler}
          getSceneStyle={getSceneStyle}>
          <Stack key="root">
            <Scene key="login" component={Login} title="Login"/>
            <Scene key="register" component={Signup} title="Register"/>
          </Stack>
        </Router >
        )
    }
}
