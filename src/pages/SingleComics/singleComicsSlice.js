import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    singleComics: [],
    loadingSingleComics:true,
    errorSingleComics:false
}

const singleComicsSlice=createSlice({
    name:"single_comics",
    initialState,
    reducers: {
        singleComicsFetching:state=>{
            state.loadingSingleComics=true
            state.errorSingleComics=false
        },
        singleComicsFetched: (state, action)=>{
            state.loadingSingleComics=false
            state.singleComics=action.payload
          
        },
        singleComicsError: state=>{
            state.errorSingleComics=true
            state.loadingSingleComics=false
            state.singleComics=[]
        }
    }
})
const {actions, reducer }= singleComicsSlice

export default reducer;

export const {
    singleComicsFetching, singleComicsFetched, singleComicsError
}=actions