import React from 'react';
import './App.css';
import FunComponent from './Components/FunComponent'
import HOC from './Components/HOCComponent'
import CC from './Components/ClassComponent'
import { firstReducer } from './redux';
import { useDispatch, useSelector } from 'react-redux';
import { Provider } from './CommonContext'
import * as tests from './tests'

tests.promises()


function App() {
    function sum(a, b) {
        return a + b;
    }

    const dispatch = useDispatch()
    const testState = useSelector(state => state.test)

    // console.log('testState', testState);
    // console.log('dispatch()', dispatch({type: 'TEST_TYPE', test: 2}));

  return <Provider value={['commonContextNewValue']}>
      <div className="App">
        { HOC(FunComponent, {name: 1, prop: 'Top Prop 1'}) }
        { HOC (CC, {name: 2, sum, prop: 'Top Prop 2'}) }
      </div>
    </Provider>
}

export default App;
