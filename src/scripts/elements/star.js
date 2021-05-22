import fullStarImg from '../../public/images/star.svg';
import halfStarImg from '../../public/images/half-star.svg';
import greyStarImg from '../../public/images/grey-star.svg';

const createStar = (value) => {
  const fullStar = `<img src="${fullStarImg}" alt="star" class="star"/>`;
  const halfStar = `<img src="${halfStarImg}" alt="half-star" class="star"/>`;
  const greyStar = `<img src="${greyStarImg}" alt="empty-star" class="star"/>`;
  let starComponent = '';

  // render full star
  for (let i = 1; i <= value; i += 1) starComponent += fullStar;

  // render half star
  if (value % 1 !== 0) {
    if (Math.round(value) === Math.ceil(value)) starComponent += halfStar;
  }

  // render empty star
  for (let j = 1; j <= 5 - Math.round(value); j += 1) starComponent += greyStar;

  return starComponent;
};

export default createStar;
