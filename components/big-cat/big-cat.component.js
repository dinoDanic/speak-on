import React, { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import Title from "../ui/typo/title.typo";
import Text from "../ui/typo/text.type";
import Button from "../ui/button/button.component";

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
            <img src={icon} alt="icon image" width="40px" />
          </Header>
          <Text>{message}</Text>
          <ButtonHold>
            <Button>contactanos</Button>
          </ButtonHold>
        </Column>
        <Column>
          <img src={image} quality="100" alt="support image" />
        </Column>
      </Content>
    </Wrap>
  );
};

const Wrap = styled(motion.div)`
  background: white;
  z-index: 200;
  margin-bottom: 50px;
  @media (max-width: ${(props) => props.theme.screen.mobile}) {
  }
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

const ButtonHold = styled.div`
  @media (max-width: ${(props) => props.theme.screen.mobile}) {
    display: flex;
    justify-content: center;
  }
  button {
    width: fit-content;
  }
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  justify-content: space-between;
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
