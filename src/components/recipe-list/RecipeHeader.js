import styled from 'styled-components';
import { PiCookingPot } from 'react-icons/pi';

const RecipeHeaderBlock = styled.header`
  background-color: #FFAD2C;
  border-radius: 2rem;
  padding: 1.5rem 1.5rem;
  padding-top: 3rem;

  h1 {
    margin-top: 0;
    margin-bottom: 1rem;
    color: #FFFFFF;
    font-weight: 600;
    font-size: 1.25rem;
    display: flex;
    align-items: center;
    
    i {
      font-size: 1.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  input {
    width: 100%;
    padding: 1rem 1.5rem;
    border-radius: 0.5rem;
    border: 1px solid #D7D7D7;
    outline: none;

    &::placeholder {
      color: #b9b9b9;
      font-size: 0.875rem;
    }
  }
`;

const RecipeHeader = () => {
  return (
    <RecipeHeaderBlock>
      <h1>
        <i><PiCookingPot /></i>
        &nbsp;&nbsp;알뜰레시피
      </h1>
      <input type="text" placeholder="레시피 찾기"/>
    </RecipeHeaderBlock>
  );
}

export default RecipeHeader;
