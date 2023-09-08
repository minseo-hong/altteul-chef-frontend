import styled from 'styled-components';
import { BsCheckLg } from 'react-icons/bs';

const RecipeInfoItemBlock = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
  background-color: #F1F1F1;
  border-radius: 8px;
  padding: 1rem 1.5rem;

  .icon {
    width: 40px;
    height: 40px;
    background-color: #FFFFFF;
    line-height: 40px;
    text-align: center;
    font-size: 1.25rem;
    border-radius: 50%;
  }

  .text {
    flex-grow: 1;
    font-weight: 600;
  }

  .check-btn {
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

const RecipeInfoItem = ({ name, icon, amount }) => {
  return (
    <RecipeInfoItemBlock>
      <div className="icon">{ icon }</div>
      <div className="text">{ name } { amount }</div>
      <button className="check-btn"><BsCheckLg /></button>
    </RecipeInfoItemBlock>
  );
}

export default RecipeInfoItem;
