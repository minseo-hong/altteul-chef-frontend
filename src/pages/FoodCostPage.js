import styled from 'styled-components';
import CostSummary from '../components/food-cost/CostSummary';
import NewsIssue from '../components/food-cost/NewsIssue';

const FoodCostPageBlock = styled.div`
  padding: 1rem 2rem;
  padding-bottom: 3rem;
`;

const FoodCostPage = () => {
  return (
    <FoodCostPageBlock>
      <CostSummary />
      <NewsIssue />
    </FoodCostPageBlock>
  );
}

export default FoodCostPage;
