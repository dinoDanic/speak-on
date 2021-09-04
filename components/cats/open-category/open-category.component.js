import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { catsData } from "../cats.data";
import { motion } from "framer-motion";

import Title from "../../ui/typo/title.typo";
import Text from "../../ui/typo/text.type";
import Button from "../../ui/button/button.component";

const OpenCategory = ({ setCurrentCat, currentCat }) => {
  const [state, setState] = useState({});

  useEffect(() => {
    if (!catsData) return;
    const find = catsData.filter((cat) => cat.title === currentCat);
    setState(find[0]);
  }, [currentCat]);

  return (
    <Wrap
      exit={{ y: -40, opacity: 0 }}
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <Content>
        {state && (
          <>
            <Column>
              <Header>
                <Title>{state.title}</Title>
                <img src={state.icon} alt="icon image" width="40px" />
              </Header>
              <Text>{state.message}</Text>
              <ButtonFix>contactanos</ButtonFix>
            </Column>
            <Column>
              <BackArrow onClick={() => setCurrentCat(null)}>
                <img src="/img/cat/backarrow.svg" alt="back image" />
              </BackArrow>
              <img src={state.image} quality="100" alt="support image" />
            </Column>
          </>
        )}
      </Content>
    </Wrap>
  );
};

const Wrap = styled(motion.div)`
  padding: 0 5%;
  top: 0;
  background: white;
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

export default OpenCategory;
