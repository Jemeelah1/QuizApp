import App from './App'
import Settings from './Components/Settings';
import './App.css';
import Reducer from './Components';
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import React from 'react';
import FetchButton from './Components/FetchButton';
import FinalScreen from './Components/FinalScreen';
import Question from './Components/Question';
import ReactDOM from 'react-dom';

const store = createStore(Reducer);
ReactDOM.render(
  <React.StrictMode>
    <App />
    <Provider store={store}>
      <App />
      <Reducer />
      <Settings />
      <FetchButton />
      <FinalScreen />
      <Question />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


export default App;
