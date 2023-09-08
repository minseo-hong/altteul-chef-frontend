import styled from 'styled-components';
import RecipeSummary from '../components/recipe/RecipeSummary';
import RecipeInfo from '../components/recipe/RecipeInfo';

const RecipeDetailPageBlock = styled.div`
  padding-left: 2rem;
  padding-right: 2rem;
`;

const RecipeDetailPage = () => {
  return (
    <RecipeDetailPageBlock>
      <RecipeSummary />
      <RecipeInfo />
    </RecipeDetailPageBlock>
  );
}

export default RecipeDetailPage;
