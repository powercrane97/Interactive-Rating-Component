function RatingButton({ value, onClick, rating }) {
  const chosen = value === rating;
  return (
    <button
      className={chosen ? "btn--rating btn--chosen" : "btn--rating"}
      type='button'
      value={value}
      onClick={onClick}>
      {value}
    </button>
  );
}

export default RatingButton;
