import styled from 'styled-components';
import RecipeInfoList from './RecipeInfoList';
import RecipeInfoCategories from './RecipeInfoCategories';

const RecipeInfoBlock = styled.div`
  margin-top: 2rem;
  margin-bottom: 3rem;
`;

const RecipeInfo = () => {
  return (
    <RecipeInfoBlock>
      <RecipeInfoCategories />
      <RecipeInfoList />
    </RecipeInfoBlock>
  );
}

export default RecipeInfo;
