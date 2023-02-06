function RatingButton({ value, onClick, children }) {
  return (
    <button className={"btn--rating"} type='button' value={value} onClick={onClick}>
      {children}
    </button>
  );
}

export default RatingButton;
