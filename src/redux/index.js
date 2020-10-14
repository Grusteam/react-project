import {createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'

const defaultState = {
    test: 1
}
export const firstReducer = (state = defaultState, action) => {
    const {type, test} = action
    // console.log('type', type);

    switch (type) {
        case 'TEST_TYPE':
            return {...state, test }
    
        default:
            return state;
    }

}
const store = createStore(firstReducer, composeWithDevTools())


export default store
