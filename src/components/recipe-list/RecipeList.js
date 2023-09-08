import styled from 'styled-components';
import RecipeItem from './RecipeItem';

const RecipeListBlock = styled.div`
  display: flex;
  overflow-x: scroll;
  padding: 0.25rem;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const RecipeList = () => {
  return (
    <RecipeListBlock>
      <RecipeItem name="소세지 볶음밥" cookingTime="10분" imageName="sausage-rice.jpeg" />
      <RecipeItem name="돼지고기 된장찌개" cookingTime="10분" imageName="soybean-stew.png" />
      <RecipeItem name="제육볶음" cookingTime="15분" imageName="spicy-pork.jpg" />
    </RecipeListBlock>
  );
}

export default RecipeList;
