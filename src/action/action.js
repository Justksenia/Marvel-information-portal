import { charsFetching, charsFetched, charsError, newCharsFetched } from "../components/CharList/charsSlice";
import { charFetching, charFetched } from "../components/CharInfo/characterSlice";
import {serverAPI} from "../api/api"
import { searchFetched, searchFetching } from "../components/CharSearchForm/searchSlice";
import { randomFetching, randomFetched, randomError } from "../components/RandomChar/randomSlice";
import {comicsFetching, comicsFetched, comicsError, newComicsFetched} from "../components/ComicsList/comicsSlice"
import {singleComicsFetching, singleComicsFetched, singleComicsError} from "../pages/SingleComics/singleComicsSlice"
import {singleCharFetching, singleCharFetched, singleCharError} from "../pages/SingleCharacter/singleCharacterSlice"


export const fetchChars=(offset)=>(dispatch)=>{
    dispatch(charsFetching())
    serverAPI.getAll(offset).then(rsp=>dispatch(charsFetched(rsp.data.data.results)))
    .catch(()=>dispatch(charsError()))
}
export const newFetchChars=(offset)=>(dispatch)=>{
    dispatch(charsFetching())
    serverAPI.getAll(offset).then(rsp=>dispatch(newCharsFetched(rsp.data.data.results)))
    .catch(()=>dispatch(charsError()))
}

export const fetchPersona=(id)=>(dispatch)=>{
    dispatch(charFetching())
    serverAPI.getPersona(id).then(res=>dispatch(charFetched(res.data.data.results)))
}

export const searchPersona=(value)=>(dispatch)=>{
    dispatch(searchFetching())
    serverAPI.searchPerson(value).then(resp=>dispatch(searchFetched(resp.data.data.results)))
}

export const randomPersona=(id)=>(dispatch)=>{
    dispatch(randomFetching())
    serverAPI.getPersona(id).then(res=>dispatch(randomFetched(res.data.data.results))).catch(()=>dispatch(randomError()))
}

export const fetchComics=(offset)=>(dispatch)=>{
    dispatch(comicsFetching())
    serverAPI.getAllComics(offset).then(resp=>dispatch(comicsFetched(resp.data.data.results))).catch(()=>dispatch(comicsError()))
}
export const fetchNewComics=(offset)=>(dispatch)=>{
    dispatch(comicsFetching())
    serverAPI.getAllComics(offset).then(resp=>dispatch(newComicsFetched(resp.data.data.results))).catch(()=>dispatch(comicsError()))
}

export const fetchSingleComics=(id)=>(dispatch)=>{
    dispatch(singleComicsFetching())
    serverAPI.getComics(id).then(resp=>dispatch(singleComicsFetched(resp.data.data.results))).catch(()=>dispatch(singleComicsError()))
}

export const fetchSingleCharacter=(id)=>(dispatch)=>{
    dispatch(singleCharFetching())
    serverAPI.getPersona(id).then(resp=>dispatch(singleCharFetched(resp.data.data.results))).catch(()=>dispatch(singleCharError()))
}