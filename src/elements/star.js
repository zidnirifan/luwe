import fullStarImg from '../public/images/star.svg';
import halfStarImg from '../public/images/half-star.svg';
import greyStarImg from '../public/images/grey-star.svg';

const createStar = (value) => {
  const fullStar = `<img src="${fullStarImg}" class="star"/>`;
  const halfStar = `<img src="${halfStarImg}" class="star"/>`;
  const greyStar = `<img src="${greyStarImg}" class="star"/>`;
  let starComponent = '';

  for (let i = 1; i <= value; i += 1) starComponent += fullStar;

  if (Math.round(value) === Math.ceil(value)) starComponent += halfStar;

  for (let j = 1; j <= 5 - Math.round(value); j += 1) starComponent += greyStar;

  return starComponent;
};

export default createStar;
