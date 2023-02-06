function ThankYou({ rating }) {
  return (
    <div className='thanks-container'>
      <div className='img-container-thanks'>
        <img src='./illustration-thank-you.svg' alt='Thank you!' />
      </div>
      <div className='rating-selected'>
        <p>You selected {rating} out of 5</p>
      </div>
      <h1>Thank you!</h1>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}

export default ThankYou;
