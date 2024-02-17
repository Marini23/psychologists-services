export const PsychologistsReviews = ({ reviews }) => {
  return (
    <ul>
      {reviews.map(review => (
        <li key={review.reviewer}>
          <div>{review.reviewer[0]}</div>
          <h4>{review.reviewer}</h4>
          <p>{review.rating}</p>
          <p>{review.comment}</p>
        </li>
      ))}
    </ul>
  );
};
