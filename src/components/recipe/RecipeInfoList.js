import styled from 'styled-components';
import RecipeInfoItem from './RecipeInfoItem';

const RecipeInfoListBlock = styled.div``;

const RecipeInfoList = () => {
  return (
    <RecipeInfoListBlock>
      <RecipeInfoItem name="쌀" icon="🍚" amount="200g" />
      <RecipeInfoItem name="소세지" icon="🥓" amount="200g" />
      <RecipeInfoItem name="간장" icon="🧉" amount="3스푼" />
      <RecipeInfoItem name="고추" icon="🌶️" amount="10g" />
    </RecipeInfoListBlock>
  );
}

export default RecipeInfoList;
