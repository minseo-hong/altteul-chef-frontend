import styled, { css } from 'styled-components';

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

const RecipeInfoCategory = ({ name, active }) => {
  return (
    <RecipeInfoCategoryBlock active={ active }>
      { name }
    </RecipeInfoCategoryBlock>
  );
}

export default RecipeInfoCategory;
