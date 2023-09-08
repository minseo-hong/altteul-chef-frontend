import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { MdAccountBalanceWallet } from "react-icons/md";
import { PiCookingPot } from 'react-icons/pi';
import { BsPeople } from 'react-icons/bs';
import { LiaUserCircleSolid } from 'react-icons/lia'

const BottomNavbarBlock = styled.nav`
  display: flex;
  justify-content: space-between;
  border-radius: 2rem;
  padding: 1.5rem 2rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const BottomNavItemBlock = styled.div`
  a {
    color: #737373;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;

    &.active {
      color: #FF7B0D;
    }

    i {
      font-size: 2rem;
    }

    span {
      font-size: 0.75rem;
    }
  }
`;

const BottomNavItem = ({ name, icon, link }) => {
  return (
    <BottomNavItemBlock>
      <NavLink to={ link } activeClassName="active">
        <i className="icon">{ icon }</i>
        <span className="name">{ name }</span>
      </NavLink>
    </BottomNavItemBlock>
  );
}

const BottomNavbar = () => {
  return (
    <BottomNavbarBlock>
      <BottomNavItem name="알뜰식비" icon={<MdAccountBalanceWallet />} link="/food-cost" checked/>
      <BottomNavItem name="알뜰레시피" icon={<PiCookingPot />} link="/recipe"/>
      <BottomNavItem name="알뜰광장" icon={<BsPeople />} link="/square"/>
      <BottomNavItem name="마이페이지" icon={<LiaUserCircleSolid />} link="/mypage"/>
    </BottomNavbarBlock>
  );
}

export default BottomNavbar;
