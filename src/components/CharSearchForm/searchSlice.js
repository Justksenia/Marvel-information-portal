import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    search: "",
    buttonDisabled:false,
    loadingSearch:false,
    searchError:false
}

const searchSlice=createSlice({
    name:"search",
    initialState,
    reducers: {
        searchFetching:state=>{
            state.loading=true
            state.buttonDisabled=true
        },
        searchFetched: (state, action)=>{
            state.loadingSearch=false
            state.search=action.payload
          
        },
        searchError: state=>{state.searchError=true},
       
    }
})
const {actions, reducer }= searchSlice

export default reducer;

export const {
    searchFetching, searchFetched, searchError
}=actions