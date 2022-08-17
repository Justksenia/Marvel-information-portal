import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import Preloader from "../../components/UI/Preloader"
import Error404 from "../../components/UI/Error404";

const SingleCharacter = ({
  singleChar,
  loadingSingleChar,
  errorSingleChar,
  dispatch,
  fetchSingleCharacter,
}) => {
  const { id } = useParams();

  useEffect(() => {
    if (!id) {
        return;
      }
      dispatch(fetchSingleCharacter(id))
  }, [id]);

  const content = loadingSingleChar ? (
    <Preloader />
  ) : (
    <SingleCharItem singleChar={singleChar} />
  );
  const error = errorSingleChar && <Error404 />;

  return (
    <div className="single-content">
      {content}
      {error}
    </div>
  );
};
const SingleCharItem = ({ singleChar }) => {
  const { thumbnail, name, description} =
    singleChar[0];

  return (
    <>
      <img
        src={`${thumbnail.path}.jpg`}
        alt={name}
        className="single-content__img"
      />
      <div className="single-content__info">
        <h2>{name}</h2>
        <p className="single-content__descr">
          {description ? description : "no data available"}
        </p>
      </div>
      <button className="button button__red">
        <Link to="/">Back to all</Link>
      </button>
    </>
  );
};

export default SingleCharacter;
