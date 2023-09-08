import styled from 'styled-components';
import RefrigeratorGrocery from '../refrigerator/RefrigeratorGrocery';

const RefrigeratorBlock = styled.div`
  padding: 0 1.5rem;

  .content {
    display: flex;
    background-color: #FFF1D6;
    border-radius: 1.5rem;
    padding: 1.25rem 2.25rem;
    min-height: 250px;
  }
`;

const Refrigerator = () => {
  return (
    <RefrigeratorBlock>
      <h1>나의 냉장고</h1>
      <div className="content">
        <RefrigeratorGrocery name="돼지고기" icon="🥓"/>
        <RefrigeratorGrocery name="쌀" icon="🍚"/>
        <RefrigeratorGrocery name="고추" icon="🌶️"/>
      </div>
    </RefrigeratorBlock>
  );
}

export default Refrigerator;
