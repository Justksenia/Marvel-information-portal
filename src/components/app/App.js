import React from "react";

import { useDispatch, useSelector } from "react-redux/es/exports";
import { Routes, Route } from "react-router-dom";
import { fetchComics, fetchNewComics, fetchSingleComics, fetchSingleCharacter } from "../../action/action";

import Header from "../Header/Header";
import Main from "../../pages/Main";
import Comics from "../../pages/Comics";
import SingleComics from "../../pages/SingleComics/SingleComics";
import SingleCharacter from "../../pages/SingleCharacter/SingleCharacter"
import Error404 from "../UI/Error404";

const App = () => {

  const dispatch = useDispatch();
  const { comics, loadingComics, disabledComics } = useSelector(
    (state) => state.comics
  );
  const {singleComics, loadingSingleComics, errorSingleComics}=useSelector(state=>state.single_comics)
  const {singleChar, loadingSingleChar, errorSingleChar}=useSelector(state=>state.single_char)

  const [offset, setOffset] = React.useState(200);

  const getComicsList = (offset) => {
    dispatch(fetchComics(offset));
    setOffset((offset) => offset + 8);
  };
  const getNewComicsList = (offset) => {
    dispatch(fetchNewComics(offset));
    setOffset((offset) => offset + 8);
  };

  React.useEffect(() => {
    getComicsList(offset);
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/comics"
          element={
            <Comics
              comics={comics}
              loadingComics={loadingComics}
              disabledComics={disabledComics}
              getNewComicsList={getNewComicsList}
            />
          }
        />
        <Route path="/comics/:id" element={<SingleComics singleComics={singleComics} loadingSingleComics={loadingSingleComics} errorSingleComics={errorSingleComics} dispatch={dispatch} fetchSingleComics={fetchSingleComics} />} />
        <Route path="/character/:id" element={<SingleCharacter singleChar={singleChar} loadingSingleChar={loadingSingleChar} errorSingleChar={errorSingleChar} dispatch={dispatch} fetchSingleCharacter={fetchSingleCharacter}/>} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
};

export default App;
