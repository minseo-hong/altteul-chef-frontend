import styled from 'styled-components';
import { Link } from 'react-router-dom';

const RecommendedRecipeBlock = styled.div`
  margin-top: 1.25rem;
  padding: 0 1.5rem;
`;

const RecipeHeading = styled.div`
  margin-bottom: 1rem;

  h1, h2 {
    margin: 0;
  }

  h1 {
    font-weight: 700;
  }

  h2 {
    font-weight: 400;
  }

  span {
    color: #FF7B0D;
  }
`;

const RecipeList = styled.div`
  display: flex;
  overflow-x: scroll;
  padding: 0.25rem;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const RecipeItemBlock = styled.div`
  margin-right: 1rem;
  border-radius: 16px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  a {
    text-decoration: none;
    color: inherit;

    img {
      width: 150px;
      height: 150px;
      object-fit: cover;
      border-radius: 16px;
    }

    div {
      padding: 1rem;

      h2 {
        font-size: 0.875rem;
        font-weight: 600;
        margin: 0;
      }

      p {
        margin: 0;
        margin-top: 0.25rem;
        font-size: 0.75rem;
        color: #919191;
      }
    }    
  }
`;

const RecipeItem = ({ name, cookingTime, imageName = "sausage-rice.jpeg" }) => {
  return (
    <RecipeItemBlock>
      <Link to="/recipe/detail">
        <img src={require(`../../assets/recipes/${imageName}`)} alt={ name } />
        <div>
          <h2>{ name }</h2>
          <p>조리시간 : { cookingTime } 이내</p>
        </div>
      </Link>
    </RecipeItemBlock>
  );
}

const RecommendedRecipe = () => {
  return (
    <RecommendedRecipeBlock>
      <RecipeHeading>
        <h2>돼지고기 재료가 많은</h2>
        <h1><span>절약</span>님을 위한 추천 레시피</h1>
      </RecipeHeading>
      <RecipeList>
        <RecipeItem name="소세지 볶음밥" cookingTime="10분" imageName="sausage-rice.jpeg" />
        <RecipeItem name="돼지고기 된장찌개" cookingTime="10분" imageName="soybean-stew.png" />
        <RecipeItem name="제육볶음" cookingTime="15분" imageName="spicy-pork.jpg" />
      </RecipeList>
    </RecommendedRecipeBlock>
  );
}

export default RecommendedRecipe;
