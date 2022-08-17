import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    char: [],
    loadingChar:true,
}

const characterSlice=createSlice({
    name:"character",
    initialState,
    reducers: {
        charFetching:state=>{
            state.loading=true
        },
        charFetched: (state, action)=>{
            state.loadingChar=false
            state.char=action.payload
          
        }
    }
})
const {actions, reducer }= characterSlice

export default reducer;

export const {
    charFetching, charFetched, charError
}=actions