import { configureStore } from "@reduxjs/toolkit";
import chars from "../components/CharList/charsSlice";
import character from "../components/CharInfo/characterSlice";
import search from "../components/CharSearchForm/searchSlice";
import random from "../components/RandomChar/randomSlice";
import comics from "../components/ComicsList/comicsSlice";
import single_comics from "../pages/SingleComics/singleComicsSlice";
import single_char from "../pages/SingleCharacter/singleCharacterSlice"

export const store=configureStore({
    reducer:{chars, character, search, random, comics, single_comics, single_char},
    devTools:process.env.NODE_ENV!=="production"
})