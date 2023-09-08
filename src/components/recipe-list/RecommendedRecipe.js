import styled from 'styled-components';
import RecipeList from '../recipe-list/RecipeList';

const RecommendedRecipeBlock = styled.div`
  margin-top: 1.25rem;
  padding: 0 1.5rem;

  h1 {
    .subtitle {
      font-weight: 400;
    }

    .user {
      color: #FF7B0D;
    }
  }
`;

const RecommendedRecipe = () => {
  return (
    <RecommendedRecipeBlock>
      <h1>
        <span className="subtitle">돼지고기 재료가 많은</span><br />
        <span className="user">절약</span>님을 위한 추천 레시피
      </h1>
      <RecipeList />
    </RecommendedRecipeBlock>
  );
}

export default RecommendedRecipe;
