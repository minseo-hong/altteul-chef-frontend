import styled from 'styled-components';
import NewsList from './NewsList';

const NewsIssueBlock = styled.div`
  margin-top: 3rem;
`;

const NewsIssue = () => {
  return (
    <NewsIssueBlock>
      <div className="title-group">
        <h1 className="title">오늘의 경제 이슈 살펴보기</h1>
      </div>
      <NewsList />
    </NewsIssueBlock>
  );
}

export default NewsIssue;
