import {combineReducers} from 'redux'

import dataReducer from './data/dataReducer'



const rootReducer = combineReducers({
   
    dataReducer,
    
})

export default rootReducer;