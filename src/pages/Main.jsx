import React from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";

import {
  fetchChars,
  newFetchChars,
  fetchPersona,
  searchPersona,
  randomPersona,
} from "../action/action";

import CharList from "../components/CharList/CharList";
import CharInfo from "../components/CharInfo/CharInfo";
import CharSearchForm from "../components/CharSearchForm/CharSearchForm";
import RandomChar from "../components/RandomChar/RandomChar";
import ErrorBoundaries from "../components/UI/ErrorBoundaries"

const Main = () => {
  const dispatch = useDispatch();
  const { chars, error, loading, disabledButton } = useSelector(
    (state) => state.chars
  );
  const { char, loadingChar } = useSelector((state) => state.character);
  const { search, buttonDisabled } = useSelector((state) => state.search);
  const { randomChar, errorRandom, loadingRandom, disabledRandom } =
    useSelector((state) => state.random);

  const [offset, setOffset] = React.useState(300);
  const [id, setId] = React.useState(0);

  const onRequest = (offset) => {
    dispatch(fetchChars(offset));
    setOffset((offset) => offset + 9);
  };
  const getChars = (offset) => {
    dispatch(newFetchChars(offset));
    setOffset((offset) => offset + 9);
  };

  const updateChar = (id) => {
    dispatch(fetchPersona(id));
  };

  const searchCharacter = (value) => {
    dispatch(searchPersona(value));
  };

  const setRandomChar = () => {
    const id = Math.floor(Math.random() * (1011400 - 1011000)) + 1011000;
    dispatch(randomPersona(id));
  };

  React.useEffect(() => {
    onRequest();
  }, []);

  React.useEffect(() => {
    updateChar(id);
  }, [id]);

  return (
    <>
  <ErrorBoundaries>
  <RandomChar
        disabledRandom={disabledRandom}
        setRandomChar={setRandomChar}
        randomChar={randomChar}
        errorRandom={errorRandom}
        loadingRandom={loadingRandom}
      />

  </ErrorBoundaries>
   
      <div className="content">
        <div className="content__left">
          <CharList
            updateChar={updateChar}
            chars={chars}
            error={error}
            loading={loading}
            disabledButton={disabledButton}
            getChars={getChars}
            offset={offset}
          />
        </div>

        <div className="content__right">
          <CharInfo char={char} loadingChar={loadingChar} />
          <CharSearchForm
            searchCharacter={searchCharacter}
            search={search}
            buttonDisabled={buttonDisabled}
          />
        </div>
        <img className="bg-decoration" src="img/vision.png" alt="vision" />
      </div>
    </>
  );
};

export default Main;
