
import Error404 from "../UI/Error404";
import SkeletonCharList from "../UI/skeleton/SkeletonCharList";

import style from "./CharList.module.scss";


const CharList = ({
  chars,
  updateChar,
  loading,
  error,
  disabledButton,
  getChars,
  offset,
}) => {
  const content = chars.map((item) => (
      <CharItem key={item.id} char={item} updateChar={updateChar} loading={loading}/>
    ))
  
  const errorComponent = error && <Error404 />;

  return (
    <section>
      <div className={style.charList}>
        {content}
        {errorComponent}
      </div>
      <button
        onClick={() => getChars(offset)}
        disabled={disabledButton}
        className="button button__red button__long"
      >
        load more
      </button>
    </section>
  );
};

const CharItem = ({ updateChar, char, loading }) => {
  return (
    <>
    {loading ? <SkeletonCharList/> : 
    
    <li
      onClick={() => updateChar(char.id)}
      className={style.charItem}
      key={char.id}
    >
      <img src={char.thumbnail.path + ".jpg"} alt={char.name} />
      <div className={style.charName}>{char.name}</div>
    </li> }
    </>
    
    
  );
};

export default CharList;
