import styled, { css } from 'styled-components';

import { BsCheckLg } from 'react-icons/bs';

const RecipeInfoBlock = styled.div`
  margin-top: 2rem;
  margin-bottom: 3rem;
`;

const RecipeInfoCategories = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 1rem;
  column-gap: 12px;
  text-align: center;
`;

const RecipeInfoList = styled.div``;

const RecipeInfoCategoryBlock = styled.button`
  flex-grow: 1;
  background-color: #FFFFFF;
  color: #FF7709;
  font-size: 1rem;
  font-weight: 600;
  border: 1.5px solid #FF7709;
  border-radius: 12px;
  padding: 0.625rem;
  outline: none;
  cursor: pointer;

  ${props => props.active && css`
      background-color: #FF7709;
      color: #FFFFFF;
  `}
`;

const RecipeInfoItemBlock = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
  background-color: #F1F1F1;
  border-radius: 8px;
  padding: 1rem 1.5rem;

  i {
    width: 40px;
    height: 40px;
    background-color: #FFFFFF;
    line-height: 40px;
    text-align: center;
    font-size: 1.25rem;
    font-style: normal;
    border-radius: 50%;
  }

  span {
    flex-grow: 1;
    font-weight: 600;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    background-color: #FFBA34;
    color: white;
    font-size: 0.75rem;
    border: none;
    border-radius: 50%;
    padding: 0;
    outline: none;
    cursor: pointer;
  }

  & + & {
    margin-top: 0.75rem;
  }
`;

const RecipeInfoCategory = ({ name, active }) => {
  return (
    <RecipeInfoCategoryBlock active={ active }>
      { name }
    </RecipeInfoCategoryBlock>
  );
}

const RecipeInfoItem = ({ name, icon, amount }) => {
  return (
    <RecipeInfoItemBlock>
      <i>{ icon }</i>
      <span>{ name } { amount }</span>
      <button><BsCheckLg /></button>
    </RecipeInfoItemBlock>
  );
}

const RecipeInfo = () => {
  return (
    <RecipeInfoBlock>
      <RecipeInfoCategories>
        <RecipeInfoCategory name="필요한 재료" active/>
        <RecipeInfoCategory name="레시피" />
        <RecipeInfoCategory name="영양소" />
      </RecipeInfoCategories>
      <RecipeInfoList>
        <RecipeInfoItem name="쌀" icon="🍚" amount="200g" />
        <RecipeInfoItem name="소세지" icon="🥓" amount="200g" />
        <RecipeInfoItem name="간장" icon="🧉" amount="3스푼" />
        <RecipeInfoItem name="고추" icon="🌶️" amount="10g" />
      </RecipeInfoList>
    </RecipeInfoBlock>
  );
}

export default RecipeInfo;
