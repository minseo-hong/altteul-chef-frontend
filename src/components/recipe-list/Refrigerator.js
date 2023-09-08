import styled from 'styled-components';

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

const RefrigeratorGroceryBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .icon {
    width: 40px;
    height: 40px;
    background-color: #FFFFFF;
    line-height: 40px;
    text-align: center;
    font-size: 1.25rem;
    border-radius: 50%;
  }

  .name {
    color: #69655F;
    font-size: 0.5rem;
    margin-top: 0.375rem;
  }

  & + & {
    margin-left: 1rem;
  }
`;

const RefrigeratorGrocery = ({ name, icon }) => {
  return (
    <RefrigeratorGroceryBlock>
      <div className="icon">{ icon }</div>
      <div className="name">{ name }</div>
    </RefrigeratorGroceryBlock>
  );
}

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
