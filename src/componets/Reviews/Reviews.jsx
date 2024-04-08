import SendForm from 'componets/SendForm/SendForm';
import CSS from './Reviews.module.css';
import sprite from '../../assets/images/sprite.svg';
const Reviews = ({ camper }) => {
  const { reviews } = camper;

  return (
    <div className={CSS.reviewsConrainer}>
      <div className={CSS.reviewsElement}>
        <ul>
          {reviews.map((reviews, index) => (
            <li className={CSS.reviewsItem} key={index}>
              <div className={CSS.nameContainer}>
                <div className={CSS.circleContainer}>
                  {reviews.reviewer_name &&
                    reviews.reviewer_name.slice(0, 1).toUpperCase()}
                </div>
                <div className={CSS.ratingCont}>
                  <p className={CSS.name}>{reviews.reviewer_name}</p>
                  <ul className={CSS.starList}>
                    {Array(5)
                      .fill(0)
                      .map((_, index) => (
                        <li key={index}>
                          <svg
                            width={20}
                            height={20}
                            fill={
                              Math.round(reviews.reviewer_rating) < index + 1
                                ? 'var(--block-features)'
                                : 'var(--rating)'
                            }
                          >
                            <use href={sprite + '#icon-star'} />
                          </svg>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>

              <p className={CSS.commentText}>{reviews.comment}</p>
            </li>
          ))}
        </ul>
      </div>
      <SendForm />
    </div>
  );
};
export default Reviews;
