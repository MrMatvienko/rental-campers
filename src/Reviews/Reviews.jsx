import SendForm from 'componets/SendForm/SendForm';
import CSS from './Reviews.module.css';
const Reviews = ({ camper }) => {
  const { reviews } = camper;

  return (
    <div className={CSS.reviewsConrainer}>
      <div className={CSS.reviewsElement}>
        <ul>
          {reviews.map((reviews, index) => (
            <li key={index}>
              <p>{reviews.reviewer_name}</p>
              <p>{reviews.reviewer_rating}</p>
              <p>{reviews.comment}</p>
            </li>
          ))}
        </ul>
      </div>
      <SendForm />
    </div>
  );
};
export default Reviews;
