import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Image from "next/image";

import Title from "../ui/typo/title.typo";
import Text from "../ui/typo/text.type";
import Button from "../ui/button/button.component";

import BackArrowSvg from "../../img/cat/backarrow.svg";

const BigCat = ({ data, setIsBig }) => {
  const { image, title, message, icon } = data;
  return (
    <Wrap
      exit={{ y: -20, opacity: 0 }}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <Content>
        <Column>
          <Header>
            <Title>{title}</Title>
            <Image src={icon} alt="icon image" />
          </Header>
          <Text>{message}</Text>
          <ButtonFix>contactanos</ButtonFix>
        </Column>
        <Column>
          <BackArrow onClick={() => setIsBig(false)}>
            <Image src={BackArrowSvg} alt="back image" />
          </BackArrow>
          <Image src={image} quality="100" alt="support image" />
        </Column>
      </Content>
    </Wrap>
  );
};

const Wrap = styled(motion.div)`
  position: absolute;
  background: #ffffff;
  width: 110%;
  left: -5%;
  padding: 0 5%;
  height: 101%;
  top: 0;

  z-index: 200;
`;
const BackArrow = styled.div`
  position: absolute;
  right: 10px;
  top: -36px;
  transition: 0.2s ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;
const ButtonFix = styled(Button)`
  width: fit-content;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  div {
    &:first-child {
      margin-right: 15px;
    }
  }
`;
const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;
const Column = styled.div`
  min-width: 200px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;

export default BigCat;
