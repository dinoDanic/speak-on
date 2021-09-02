import React from "react";
import styled from "styled-components";
import Image from "next/image";
import IconLogoLine from "../../img/logo-icon-line.svg";

import BigCat from "../../components/big-cat/big-cat.component";
import Container from "../../components/ui/container/container.component";
import Heading from "./heading";

import { catsData } from "../../components/cats/cats.data";

const Soluciones = () => {
  console.log(catsData);
  return (
    <Wrap>
      <Heading />
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
      <Container>
        {catsData?.map((data) => (
          <BigCat normal data={data} key={data.text} />
        ))}
      </Container>
    </Wrap>
  );
};

const BgHolder = styled.div`
  height: 100%;
  position: absolute;
  width: 100%;
`;
const Wrap = styled.div`
  height: 100%;
  position: relative;
  overflow: hidden;
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

export default Soluciones;
