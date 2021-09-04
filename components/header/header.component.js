import React from "react";
import styled from "styled-components";

import Menu from "./menu/menu.component";

const Header = () => {
  return (
    <Bar>
      <Container>
        <Content>
          <Logo>
            <img src="/img/logo.svg" alt="speak on logo image" width="100%" />
          </Logo>
          <Menu />
        </Content>
      </Container>
    </Bar>
  );
};

const Bar = styled.div`
  width: 100%;
  height: 140px;
  position: fixed;
  overflow: hidden;
  color: white;
  top: 0;
  z-index: 900;
  &:after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    bottom: 0;
    margin-top: 0px;
    left: 50%;
    height: 158px;
    width: 120%;
    -webkit-transform: translate(-50%, 50%);
    -ms-transform: translate(-50%, 50%);
    transform: translate(-50%, 50%);
    box-shadow: 0px 0px 0px 510px rgb(0 0 0 / 80%);
    border-top-left-radius: 2000px 300px;
    border-top-right-radius: 2000px 300px;
    z-index: -1;
    top: -10px;
  }
  @media (max-width: 700px) {
    display: none;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 11px;
`;
const Content = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
`;
const Logo = styled.div`
  min-width: 171px;
  max-width: 171px;
  height: 54px;
  padding-top: 9px;
`;

export default Header;
