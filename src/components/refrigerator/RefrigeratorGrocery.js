import styled from 'styled-components';

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

export default RefrigeratorGrocery;
