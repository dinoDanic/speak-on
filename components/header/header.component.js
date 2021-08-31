import React from "react";
import styled from "styled-components";
import Image from "next/image";

import LogoPng from "../../img/logo.png";

import Menu from "./menu/menu.component";

const Header = () => {
  return (
    <Bar>
      <Container>
        <Content>
          <Logo>
            <Image src={LogoPng} alt="speak on logo image" />
          </Logo>
          <Menu />
        </Content>
      </Container>
    </Bar>
  );
};

const Bar = styled.div`
  width: 100%;
  height: 200px;
  position: fixed;
  overflow: hidden;
  color: white;
  z-index: 999;
  &:after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    bottom: 0;
    left: 50%;
    height: 250px;
    width: 120%;
    transform: translate(-50%, 50%);
    box-shadow: 0px 0px 0px 200px rgba(0, 0, 0, 0.5);
    border-top-left-radius: 2000px 300px;
    border-top-right-radius: 2000px 300px;
    z-index: -1;
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
