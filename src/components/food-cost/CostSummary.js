import styled from 'styled-components';
import CostCard from './CostCard';

const CostSummaryBlock = styled.div`
  .title {
    padding: 1rem 0.75rem;
    font-weight: 600;

    .user {
      font-size: 1.5rem;
      margin-bottom: 0.375rem;

      span {
        color: #FF7B0D;
      }
    }

    .text {
      font-size: 1.25rem;
    }
  }
`;

const CostSummary = () => {
  return (
    <CostSummaryBlock>
      <div className="title">
        <div className="user"><span>절약</span>님</div>
        <div className="text">오늘 하루 조금만 더 힘내요!</div>
      </div>
      <CostCard />
    </CostSummaryBlock>
  );
}

export default CostSummary;
