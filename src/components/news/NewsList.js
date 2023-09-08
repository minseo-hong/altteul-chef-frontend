import styled from 'styled-components';
import NewsItem from './NewsItem';

const NewsListBlock = styled.div``;

const NewsList = () => {
  return (
    <NewsListBlock>
      <NewsItem title="쏟아지는 은행채에 주담대 또 오르나" host="해럴드 경제" 
                releasedDate="1시간 전" image="쏟아지는 은행채에 주담대 또 오르나.jpg" />
      <NewsItem title="오는 24일부터 전세사기 피해자에 싼 금리로 대환대출" host="글로벌경제신문" 
                releasedDate="2시간 전" image="오는 24일부터 전세사기 피해자에 싼 금리로 대환대출.jpg" />
    </NewsListBlock>
  );
}

export default NewsList;
