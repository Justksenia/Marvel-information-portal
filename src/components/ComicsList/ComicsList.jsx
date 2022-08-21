import { Link } from "react-router-dom";

import SkeletonComicsList from "../UI/skeleton/SkeletonComicsList"

import style from "./ComicsList.module.scss";

const ComicsList = ({
  getNewComicsList,
  comics,
  loadingComics,
  disabledComics,
}) => {
  const content = comics.map((item) => <ComicsListItem key={item.id} comics={item} loadingComics={loadingComics}/>)
  
  return (

    <div className={style.comicsList}>
      <div className={style.comicsGrid}>
        {content}
      </div>

      <button
        className="button button__red button__long"
        onClick={getNewComicsList}
        disabled={disabledComics}
        style={disabledComics ? { backgroundColor: "gray" } : null}
      >
        load more
      </button>

    </div>
  );
};

const ComicsListItem = ({ comics, loadingComics }) => {
  return (
 
    <div className={style.comicsItem}>
      {loadingComics ? <SkeletonComicsList/> :
      <>
      <Link to={`/comics/${comics.id}`}>
        <img src={comics.thumbnail.path + ".jpg"} alt="ultimate war" />
        <div className={style.comicsItemName}>{comics.title}</div>
        <div className={style.comicsItemPrice}>
          {comics.prices[0].price
            ? `${comics.prices[0].price}$`
            : "not available"}
        </div>
      </Link>
      </>
      }
      
    </div>

  );
};
export default ComicsList;
