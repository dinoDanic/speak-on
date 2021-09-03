import React from "react";
import Image from "next/image";
import IconLogoLine from "../../img/logo-icon-line.svg";
import styled from "styled-components";

const BackgroundHolder = () => {
  return (
    <BgHolder>
      <LeftLogo>
        <Image src={IconLogoLine} alt="logo" layout="fixed" />
        <Image src={IconLogoLine} alt="logo" layout="fixed" />
        <Image src={IconLogoLine} alt="logo" layout="fixed" />
      </LeftLogo>
      <RightLogo>
        <Image src={IconLogoLine} alt="logo" layout="fixed" />
        <Image src={IconLogoLine} alt="logo" layout="fixed" />
        <Image src={IconLogoLine} alt="logo" layout="fixed" />
      </RightLogo>
    </BgHolder>
  );
};

const BgHolder = styled.div`
  height: 100%;
  position: absolute;
  width: 100%;
`;
const LeftLogo = styled.div`
  width: 775px;
  position: absolute;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 500px;
  left: -700px;
`;
const RightLogo = styled.div`
  width: 775px;
  margin-top: -300px;
  position: absolute;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  right: -500px;
`;

export default BackgroundHolder;
