import * as axios from "axios"



const url="https://gateway.marvel.com:443/v1/public/";
const APIKey="apikey=8fa616d9e7f3b72deccd765c10a26cc1"
const offSet=300


export const serverAPI={
    getAll(offset=offSet) {
        return axios.get(`${url}characters?limit=9&offset=${offset}&${APIKey}`)  
    },
    getPersona(id) {
        return axios.get (`${url}characters/${id}?${APIKey}`)
    },
    getAllComics (offset) {
        return axios.get (`${url}comics?orderBy=issueNumber&limit=8&offset=${offset}&${APIKey}`)
    },
    searchPerson(name) {
        return axios.get(`${url}characters?name=${name}&${APIKey}`)
    },
    getComics(id) {
        return axios.get(`${url}comics/${id}?${APIKey}`)
    }
  
}
