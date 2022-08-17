import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    chars: [],
    error: false,
    loading:true,
    disabledButton:false
}

const charsSlice=createSlice({
    name:"chars",
    initialState,
    reducers: {
        charsFetching:state=>{
            state.loading=true
            state.disabledButton=true  
          },
        charsFetched: (state, action)=>{
            state.loading=false
            state.chars=action.payload
            state.disabledButton=false 
        },
        charsError: state=>{state.error=true},
        newCharsFetched: (state,action)=> {
            state.loading=false
            state.chars.push(...action.payload)
            state.disabledButton=false
          
        }
    }
})
const {actions, reducer }= charsSlice

export default reducer;

export const {
    charsFetching, charsFetched, charsError, newCharsFetched
}=actions