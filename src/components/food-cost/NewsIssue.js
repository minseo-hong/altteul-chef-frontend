import styled from 'styled-components';

const NewsIssueBlock = styled.div`
  margin-top: 3rem;
`;

const NewsList = styled.div``;

const NewsItemBlock = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 1rem;
  padding: 1.5rem 1rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  h1 {
    margin: 0;
    font-size: 1.125rem;
    font-weight: 400;
    flex: 1;
  }

  p {
    margin: 0;
    margin-top: 0.5rem;
    color: rgb(140, 140, 140);
  }

  img {
    width: 60px;
    height: 60px;
    object-fit: cover;
    margin-left: 1rem;
    border-radius: 8px;
  }

  & + & {
    margin-top: 1rem;
  }
`;

const NewsItem = ({ title, host, releasedDate, image }) => {
  return (
    <NewsItemBlock>
      <div>
        <h1>{ title }</h1>
        <p>{ host } | { releasedDate }</p>
      </div>
      <img src={require(`../../assets/news/${ image }`)} alt={ title }></img>
    </NewsItemBlock>
  );
}

const NewsIssue = () => {
  return (
    <NewsIssueBlock>
      <h1>오늘의 경제 이슈 살펴보기</h1>
      <NewsList>
        <NewsItem title="쏟아지는 은행채에 주담대 또 오르나" host="해럴드 경제" 
          releasedDate="1시간 전" image="쏟아지는 은행채에 주담대 또 오르나.jpg" />
        <NewsItem title="오는 24일부터 전세사기 피해자에 싼 금리로 대환대출" host="글로벌경제신문" 
          releasedDate="2시간 전" image="오는 24일부터 전세사기 피해자에 싼 금리로 대환대출.jpg" />
      </NewsList>
    </NewsIssueBlock>
  );
}

export default NewsIssue;
