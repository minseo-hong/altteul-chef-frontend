import styled from 'styled-components';

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

export default NewsItem;
