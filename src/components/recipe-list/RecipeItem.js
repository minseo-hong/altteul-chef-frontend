import styled from 'styled-components';
import { Link } from 'react-router-dom';

const RecipeItemBlock = styled.div`
  margin-right: 1rem;
  border-radius: 16px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  a {
    text-decoration: none;
    color: inherit;

    .image {
      width: 150px;
      height: 150px;
      object-fit: cover;
      border-radius: 16px;
    }

    .content {
      padding: 1rem;

      h2 {
        font-size: 0.875rem;
        font-weight: 600;
        margin: 0;
      }

      p {
        margin: 0;
        margin-top: 0.25rem;
        font-size: 0.75rem;
        color: #919191;
      }
    }    
  }
`;

const RecipeItem = ({ name, cookingTime, imageName = "sausage-rice.jpeg" }) => {
  return (
    <RecipeItemBlock>
      <Link to="/recipe/detail">
        <img className="image" src={require(`../../assets/recipes/${imageName}`)} alt={ name } />
        <div className="content">
          <h2>{ name }</h2>
          <p>조리시간 : { cookingTime } 이내</p>
        </div>
      </Link>
    </RecipeItemBlock>
  );
}

export default RecipeItem;
