import { ADD_CASES,INDIAN_CASES } from "../actions/actionType";

const initialState={
    stateWise:[],
    countryWise:[]
}
export default function cases(state=initialState,action){
    if(action.type===ADD_CASES){
        return{
            ...state,
            countryWise:action.cases

        }
    }
    if(action.type===INDIAN_CASES){
        return{
            ...state,
            stateWise:action.indianCases

        }
    }
    return state;
}