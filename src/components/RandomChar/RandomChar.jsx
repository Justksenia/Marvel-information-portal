
import React from "react";

import Preloader from "../UI/Preloader";

import style from "./RandomChar.module.scss";

const RandomChar = ({randomChar, errorRandom, loadingRandom, setRandomChar, disabledRandom}) => {

  React.useEffect(() => {
    setRandomChar();
    const timerId = setInterval(setRandomChar, 60000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  const content = loadingRandom ? <Preloader /> : <View char={randomChar} errorRandom={errorRandom} disabledRandom={disabledRandom} /> ;


  return (
    <div className={style.randomchar}>
     {content}
      <div className={style.randomcharRight}>
        <div className={style.randomcharTitle}>
         <p> Random character for today! </p>
          <br />
          <p>Do you want to get to know him better? </p>
          <p>Or choose another one</p>
        </div>
         <button onClick={setRandomChar} className="button button__red">try it
         </button>
        <img src="img/mjolnir.png" alt="mjolnir" />
      </div>
    </div>
  );
};

const View = ({ char, errorRandom, disabledRandom }) => {
  const { name, description, thumbnail, urls} = char[0];
  return (
    <div className={style.randomcharLeft}>
      <img
        src={errorRandom?"img/ironman.png": thumbnail.path+".jpg"}
        alt="Random character"
      />
      <div className={style.randomcharInfo}>
        <p className={style.randomcharName}>{errorRandom?"not found":name}</p>
        <p className={style.randomcharDescription}>{description?description:"no information available"}</p>
        <div className={style.randomcharBtns}>
          <button className="button button__red" disabled={disabledRandom} ><a href={urls[0].url} >homepage</a></button>
          <button className="button button__grey" disabled={disabledRandom}><a href={urls[1].url}>Wiki </a></button>         
           </div>
      </div>
    </div>
  );
};

export default RandomChar;

