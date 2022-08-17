import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    randomChar: [],
    errorRandom: false,
    loadingRandom:true,
    disabledRandom:false
}

const randomSlice=createSlice({
    name:"random",
    initialState,
    reducers: {
        randomFetching:state=>{
            state.loadingRandom=true
        },
        randomFetched: (state, action)=>{
            state.errorRandom=false
            state.loadingRandom=false
            state.randomChar=action.payload
            state.disabledRandom=false
          
        },
        randomError: state=>{
            state.loadingRandom=false
            state.errorRandom=true
            state.disabledRandom=true
            
        },
       
    }
})
const {actions, reducer }= randomSlice

export default reducer;

export const {
    randomFetching, randomFetched, randomError
}=actions