import { Outlet } from "react-router-dom";
import { HomeHeader } from "../../components/Header/HomeHeader";
import { LayoutContainer } from "./styles";

export function HomeLayout() {
  return (
    <LayoutContainer>
      <HomeHeader />
      <Outlet />
    </LayoutContainer>
  );
}
