import styled from 'styled-components';
import { Outlet } from "react-router-dom";
import BottomNavbar from "../components/common/BottomNavbar";

const AppLayout = styled.div`
  width: 412px;
`;

const Content = styled.div`
  height: 640px;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const HomePage = () => {
  return (
    <AppLayout>
      <Content>
        <Outlet />
      </Content>
      <BottomNavbar />
    </AppLayout>
  );
}

export default HomePage;
