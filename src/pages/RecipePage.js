import styled from 'styled-components';
import RecommendedRecipe from '../components/recipe-list/RecommendedRecipe';
import Refrigerator from '../components/refrigerator/Refrigerator';
import Header from '../components/recipe-list/Header';

const RecipePageBlock = styled.div`
  padding-bottom: 3rem;
  
  header {
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
      
      .icon {
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
  }
`;

const RecipePage = () => {
  return (
    <RecipePageBlock>
      <Header />
      <RecommendedRecipe />
      <Refrigerator />
    </RecipePageBlock>
  );
}

export default RecipePage;
