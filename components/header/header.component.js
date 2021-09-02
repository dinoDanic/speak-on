import React from "react";
import styled from "styled-components";
import Image from "next/image";

import LogoPng from "../../img/logo.svg";

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
  top: 0;
  z-index: 900;
  &:after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    bottom: 0;
    left: 50%;
    height: 250px;
    width: 120%;
    transform: translate(-50%, 50%);
    box-shadow: 0px 0px 0px 200px rgba(0, 0, 0, 0.8);
    border-top-left-radius: 2000px 300px;
    border-top-right-radius: 2000px 300px;
    z-index: -1;
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
