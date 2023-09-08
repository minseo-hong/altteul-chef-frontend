import styled from 'styled-components';

const Heading = styled.div`
  padding: 1rem 0.75rem;
  
  h1 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: 0;
    margin-bottom: 0.375rem;
  }

  span {
    color: #FF7B0D;
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-top: 0;
    margin-bottom: 0;
  }
`;

const CostCard = styled.div`
  background-color: #FFAD2C;
  color: #FFFFFF;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  
  h1 {
    margin: 0;
    padding: 0;
    font-weight: 700;
    font-size: 2.25rem;
  }

  h2 {
    margin: 0;
    font-weight: 900;
    font-size: 1rem;
  }

  p {
    margin: 0.75rem 0;
  }

  button {
    background-color: #FFFFFF;
    color: #FF7B0D;
    font-weight: 900;
    border: none;
    border-radius: 0.25rem;
    outline: none;
    padding: 1rem;
    cursor: pointer;
  }

  button + button {
    margin-left: 0.75rem;
  }
`;

const CostSummary = () => {
  return (
    <div>
      <Heading>
        <h1><span>절약</span>님</h1>
        <h2>오늘 하루 조금만 더 힘내요!</h2>
      </Heading>
      <CostCard>
        <h2>오늘의 식비</h2>
        <h1>25,000원</h1>
        <p>오늘은 2만 5천원 식비를 쓸 수 있어요.</p>
        <div>
          <button>예산 수정하기</button>
          <button>지출 입력하기</button>
        </div>
      </CostCard>
    </div>
  );
}

export default CostSummary;
