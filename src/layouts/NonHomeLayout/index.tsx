import { Outlet } from "react-router-dom";
import { NonHomeHeader } from "../../components/Header/NonHomeHeader";
import { LayoutContainer } from "./styles";

export function NonHomeLayout() {
  return (
    <LayoutContainer>
      <NonHomeHeader />
      <Outlet />
    </LayoutContainer>
  );
}
