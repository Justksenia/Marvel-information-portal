import Banner from "../components/Banner/Banner"
import ComicsList from "../components/ComicsList/ComicsList"

const Comics=({getNewComicsList, comics, loadingComics, disabledComics})=>{
    return (
        <div>
        <Banner /> 
        <ComicsList comics={comics} loadingComics={loadingComics} disabledComics={disabledComics} getNewComicsList={getNewComicsList}/>
        </div>
      
    )
}

export default Comics