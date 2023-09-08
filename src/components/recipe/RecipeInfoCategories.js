import styled from 'styled-components';
import RecipeInfoCategory from './RecipeInfoCategory';

const RecipeInfoCategoriesBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 1rem;
  column-gap: 12px;
  text-align: center;
`;

const RecipeInfoCategories = () => {
  return (
    <RecipeInfoCategoriesBlock>
      <RecipeInfoCategory name="필요한 재료" active/>
      <RecipeInfoCategory name="레시피" />
      <RecipeInfoCategory name="영양소" />
    </RecipeInfoCategoriesBlock>
  );
}

export default RecipeInfoCategories;
