import { useRef, useState, useEffect } from "react";
import "./App.css";
import RatingButton from "./RatingButton";
import ThankYou from "./ThankYou";

function App() {
  const [submit, setSubmit] = useState(false);
  const [rating, setRating] = useState(null);

  useEffect(() => {
    if (!rating) return;
    document
      .querySelectorAll(`button[value]`)
      .forEach(button => button.classList.remove("btn--chosen"));
    document
      .querySelector(`button[value="${rating}"]`)
      .classList.add("btn--chosen");

    return () =>
      document
        .querySelectorAll(`button[value]`)
        .forEach(button => button.classList.remove("btn--chosen"));
  }, [rating]);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmit(submit => !submit);
  }
  function handleRating(e) {
    setRating(e.target.value);
    // e.target.classList.add('btn--register');
  }

  return (
    <div id='app'>
      {submit ? (
        <ThankYou rating={rating} />
      ) : (
        <>
          <div className='img-container'>
            <img src='../icon-star.svg' alt='Star icon' />
          </div>
          <h1>How did we do?</h1>
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <form action=''>
            <ol>
              <li className='li-button'>
                <RatingButton value={1} onClick={handleRating}>
                  1
                </RatingButton>
              </li>
              <li className='li-button'>
                <RatingButton value={2} onClick={handleRating}>
                  2
                </RatingButton>
              </li>
              <li className='li-button'>
                <RatingButton value={3} onClick={handleRating}>
                  3
                </RatingButton>
              </li>
              <li className='li-button'>
                <RatingButton value={4} onClick={handleRating}>
                  4
                </RatingButton>
              </li>
              <li className='li-button'>
                <RatingButton value={5} onClick={handleRating}>
                  5
                </RatingButton>
              </li>
            </ol>
            <button
              type='submit'
              className='btn--submit'
              onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </>
      )}
    </div>
  );
}

export default App;
