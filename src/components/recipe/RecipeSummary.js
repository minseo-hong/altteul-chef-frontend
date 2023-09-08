import styled from 'styled-components';
import { BsFillSuitHeartFill } from 'react-icons/bs';

const RecipeSummaryBlock = styled.div`
  margin-top: 3rem;

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .text {
      .name {
        color: #FF7709;
        font-size: 1.5rem;
        margin: 0;
      }

      .sub-info {
        margin-top: 0.5rem;
        margin-bottom: 0;
      }
    }

    .fav-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      background-color: #FF7709;
      color: white;
      border: none;
      border-radius: 50%;
      outline: none;
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
      cursor: pointer;
    }
  }

  .image {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 1rem;
    margin-top: 1.25rem;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
`;

const RecipeSummary = () => {
  return (
    <RecipeSummaryBlock>
      <div className="top">
        <div className="text">
          <h1 className="name">소세지 볶음밥</h1>
          <p className="sub-info">조리 시간 10분 이내 | 난이도 ★★</p>
        </div>
        <button className="fav-btn">
          <BsFillSuitHeartFill />
        </button>
      </div>
      <img src={require('../../assets/recipes/sausage-rice.jpeg')} alt="소세지 볶음밥" className="image" />
    </RecipeSummaryBlock>
  );
}

export default RecipeSummary;
