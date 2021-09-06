import React from "react";
import styled from "styled-components";

const BackgroundHolder = () => {
  return (
    <BgHolder>
      <LeftLogo>
        <img src="/img/logo-icon-line.svg" alt="logo" />
        <img src="/img/logo-icon-line.svg" alt="logo" />
        <img src="/img/logo-icon-line.svg" alt="logo" />
      </LeftLogo>
      <RightLogo>
        <img src="/img/logo-icon-line.svg" alt="logo" />
        <img src="/img/logo-icon-line.svg" alt="logo" />
        <img src="/img/logo-icon-line.svg" alt="logo" />
      </RightLogo>
    </BgHolder>
  );
};

const BgHolder = styled.div`
  height: 100%;
  position: absolute;
  width: 100%;
  img {
    width: 100%;
  }
`;
const LeftLogo = styled.div`
  width: 775px;
  position: absolute;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 500px;
  left: -550px;
`;
const RightLogo = styled.div`
  width: 775px;
  margin-top: -300px;
  position: absolute;
  object-fit: contain;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  right: -550px;
`;

export default BackgroundHolder;
