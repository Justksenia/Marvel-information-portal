import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    comics: [],
    errorComics: false,
    loadingComics:true,
    disabledComics:false
}

const comicsSlice=createSlice({
    name:"comics",
    initialState,
    reducers: {
        comicsFetching:state=>{
            state.loadingComics=true
            state.disabledComics=true  
          },
        comicsFetched: (state, action)=>{
            state.loadingComics=false
            state.comics=action.payload
            state.disabledComics=false 
        },
        comicsError: state=>{
            state.errorComics=true
            state.loadingComics=false
        },
        newComicsFetched: (state,action)=> {
            state.loadingComics=false
            state.comics.push(...action.payload)
            state.disabledComics=false    
        }
    }
})
const {actions, reducer }= comicsSlice

export default reducer;

export const {
    comicsFetching, comicsFetched, comicsError, newComicsFetched
}=actions