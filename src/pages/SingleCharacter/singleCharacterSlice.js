import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    singleChar: [],
    loadingSingleChar:true,
    errorSingleChar:false
}

const singleCharacterSlice=createSlice({
    name:"single_char",
    initialState,
    reducers: {
        singleCharFetching:state=>{
            state.loadingSingleChar=true
            state.errorSingleChar=false
        },
        singleCharFetched: (state, action)=>{
            state.loadingSingleChar=false
            state.singleChar=action.payload
          
        },
        singleCharError: state=>{
            state.errorSingleChar=true
            state.loadingSingleChar=false
            state.singleChar=[]
        }
    }
})
const {actions, reducer }= singleCharacterSlice

export default reducer;

export const {
    singleCharFetching, singleCharFetched, singleCharError
}=actions