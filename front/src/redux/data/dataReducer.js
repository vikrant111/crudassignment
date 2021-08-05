import {GETDATA} from './dataTypes'

const initialState = {
    listing : {} 
}

const reducer = (state=initialState , action) =>{
    switch(action.type){
        case GETDATA : 
            return{
                ...state,
                listing : action.payload
            }
        default :
        return state
        
    }
}

export default reducer