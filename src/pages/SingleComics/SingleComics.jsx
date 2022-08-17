import React from "react";
import { useParams, Link } from "react-router-dom";

import Preloader from "../../components/UI/Preloader";
import Error404 from "../../components/UI/Error404";


const SingleComics = ({
  singleComics,
  loadingSingleComics,
  errorSingleComics,
  dispatch,
  fetchSingleComics,
}) => {
  const { id } = useParams();

  React.useEffect(() => {
    updateComics();
  }, [id]);

  const updateComics = () => {
    dispatch(fetchSingleComics(id));
  };
  const content = loadingSingleComics ? (
    <Preloader />
  ) : (
    <ComicsItem singleComics={singleComics} />
  );
  const error = errorSingleComics && <Error404 />;
  return (
    <div className="single-content">
      {content}
      {error}
    </div>
  );
};
const ComicsItem = ({ singleComics }) => {
  const { thumbnail, title, description, pageCount, textObjects, prices } =
    singleComics[0];
  return (
    <>
      <img
        src={`${thumbnail.path}.jpg`}
        alt={title}
        className="single-content__img"
      />
      <div className="single-content__info">
        <h2>{title}</h2>
        <div className="single-content__descr">
        <p>{description}</p> <br/>
        <b>{pageCount} pages</b> 
          <p>Language:{" "}
          {textObjects.length > 0 ? textObjects[0].language : "Not found"}</p>
        </div>
       <div className="single-content__price">{prices[0].price}$</div>
      </div>
      <div>
        <button className="button button__red">
            <Link to="/comics" >
          Back to all
        </Link></button>
      </div>
    </>
  );
};

export default SingleComics;
