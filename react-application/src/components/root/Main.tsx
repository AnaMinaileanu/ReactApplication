import { BrowserRouter, NavLink, Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import { Login } from "../open-id-connect/Login";
import styled from "styled-components";
import { useAuth } from "../shared/useAuth";
import { Logout } from "../open-id-connect/Logout";
import PrivateRoute from "../shared/privateRoute";

/////// ---start styles region--- ////////
const Navbar = styled.nav`
  background-color: hsl(359, 62%, 40%);
  border-bottom: 1px solid hsl(210deg, 15%, 20%);
  width: 100%;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
`;
const NavItems = styled.ul`
  list-style: none;
  display: flex;
  justify-content: start;
  padding-left: 0;
`;
const NavItem = styled.li`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: hsl(210deg, 9%, 45%);
  &[class*="active"] {
    color: hsl(210deg, 10%, 100%);
  }
`;
const Wrapper = styled.main`
  width: 100%;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
`;

/////// ---end styles region--- ////////

const Main = () => {
  const { user } = useAuth();
  const currentLocation = useLocation();
  return (
    <>
      <Navbar>
        <NavItems>
          <NavItem>
            <StyledNavLink to="/Home">Home</StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink to="/Dashboard">Dashboard</StyledNavLink>
          </NavItem>

          <NavItem>
            {user ? (<StyledNavLink to="/Logout">Logout</StyledNavLink>)
              : (<StyledNavLink to="/Login" state={currentLocation.pathname}>Login</StyledNavLink>)}
          </NavItem>
        </NavItems>
      </Navbar>

      <Routes>
        <Route path="/Home" element={<Home />}></Route>
        {/*
        <Route path="/Dashboard" element={<PrivateRoute />}>*/}
          <Route path="/Dashboard" element={<Dashboard />}></Route>
        {/*</Route>*/}
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Logout" element={<Logout />}></Route>
        <Route index element={<Home />}></Route>
      </Routes>

    </>

  );
};

export { Main };