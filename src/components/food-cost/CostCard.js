import styled from 'styled-components';

const CostCardBlock = styled.div`
  background-color: #FFAD2C;
  color: #FFFFFF;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  h2 {
    margin: 0;
    font-weight: 900;
    font-size: 1rem;
  }

  h1 {
    margin: 0;
    padding: 0;
    font-weight: 700;
    font-size: 2.25rem;
  }

  p {
    margin: 0.75rem 0;
  }

  .btn-group {
    display: flex;

    button {
      background-color: #FFFFFF;
      color: #FF7B0D;
      font-weight: 900;
      border: none;
      border-radius: 0.25rem;
      outline: none;
      padding: 1rem;
      cursor: pointer;

      &.input-btn {
        margin-left: 0.75rem;
      }
    }
  }
`;

const CostCard = () => {
  return (
    <CostCardBlock>
      <h2>오늘의 식비</h2>
      <h1>25,000원</h1>
      <p>오늘은 2만 5천원 식비를 쓸 수 있어요.</p>
      <div className="btn-group">
        <button className="edit-btn">
          예산 수정하기
        </button>
        <button className="input-btn">
          지출 입력하기
        </button>
      </div>
    </CostCardBlock>
  );
}

export default CostCard;
