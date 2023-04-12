import { useSelector } from "react-redux";
import { getReviews } from "../../store/reviews";
import ReviewIndexItem from "./ReviewIndexItem";
import { useParams } from "react-router-dom";


const ReviewIndex = () => {

  const reviews = useSelector(getReviews)
  const {listingId} = useParams();

  return (
    <>
    <div className="review-index">
      <ul>
      {reviews.map((review) => {
  return <ReviewIndexItem key={review.id} reviewProp={review} listingId={listingId}/>
})}
      </ul>
        <h2>HelloWorld</h2>
    </div>
    </>
  )
};

export default ReviewIndex;