import { useRef, useState, useEffect, Suspense } from "react";
import "./App.css";
import RatingButton from "./RatingButton";
import ThankYou from "./ThankYou";

const ratings = [1, 2, 3, 4, 5];

function App() {
  const [submit, setSubmit] = useState(false);
  const [rating, setRating] = useState(null);

  const chosen = "btn--chosen";

  function handleSubmit(e) {
    e.preventDefault();
    setSubmit(submit => !submit);
  }

  function handleRating(e) {
    if (rating === Number(e.target.value)) {
      setRating(null);
    } else setRating(Number(e.target.value));
  }

  return (
    <div id='app'>
      {submit ? (
        <ThankYou rating={rating} />
      ) : (
        <>
          <div className='img-container'>
            <img src='./icon-star.svg' alt='Star icon' />
          </div>
          <h1>How did we do?</h1>
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <form action=''>
            <ol>
              {ratings.map(rat => (
                <li className='li-button' key={rat}>
                  <RatingButton
                    value={rat}
                    onClick={handleRating}
                    rating={rating}
                  />
                </li>
              ))}
            </ol>
            <button
              type='submit'
              className='btn--submit'
              onClick={handleSubmit}
              style={
                rating
                  ? { pointerEvents: "auto", cursor: "pointer" }
                  : { pointerEvents: "none" }
              }>
              Submit
            </button>
          </form>
        </>
      )}
    </div>
  );
}

export default App;
