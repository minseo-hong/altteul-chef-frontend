import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const BottomNavItemBlock = styled.div`
  a {
    color: #737373;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;

    .icon {
      font-size: 2rem;
    }

    .name {
      font-size: 0.75rem;
    }

    &.active {
      color: #FF7B0D;
    }
  }
`;

const BottomNavItem = ({ name, icon, link }) => {
  return (
    <BottomNavItemBlock>
      <NavLink to={ link } activeClassName="active">
        <span className="icon">{ icon }</span>
        <span className="name">{ name }</span>
      </NavLink>
    </BottomNavItemBlock>
  );
}

export default BottomNavItem;
