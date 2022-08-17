import Skeleton from "../UI/skeleton/Skeleton";

import style from "./CharInfo.module.scss";

const CharInfo = ({ char, loadingChar }) => {
  return (
    <div className={style.charInfo}>
      {loadingChar ? <Skeleton /> : <CharInfoItem char={char} />}
    </div>
  );
};

const CharInfoItem = ({ char }) => {
  const { name, description, thumbnail, urls, comics } = char[0];
  return (
    <>
      <div className={style.charHeader}>
        <img src={thumbnail.path + ".jpg"} alt={name} />
        <div className={style.charInfoBlock}>
          <p>{name}</p>
          <div className={style.charBtns}>
            <button className="button button__red">
              <a href={urls[0].url} />
              homepage
            </button>

            <button className="button button__grey">
              <a href={urls[1].url} />
              Wiki
            </button>
          </div>
        </div>
      </div>
      <div className={style.charDescription}>
        {description ? description : "no information available"}
      </div>
      <div className={style.charComics}>Comics:</div>
      <ul>
        {comics.items.length < 1 ? "Comics not found" : null}
        {comics.items.map((item, index) => {
          if (index > 9) return;
          return (
            <li className={style.charComicsItem} key={index}>
              {item.name}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CharInfo;
