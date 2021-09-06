import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { catsData } from "../cats.data";
import { motion } from "framer-motion";

import Title from "../../ui/typo/title.typo";
import Text from "../../ui/typo/text.type";
import Button from "../../ui/button/button.component";

const OpenCategory = ({ setCurrentCat, currentCat }) => {
  const [state, setState] = useState({});
  const fakeRef = useRef();

  useEffect(() => {
    if (!catsData) return;
    const find = catsData.filter((cat) => cat.title === currentCat);
    setState(find[0]);
    if (catsData !== null) {
      setTimeout(() => {
        fakeRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }, 300);
    }
  }, [currentCat]);

  return (
    <Wrap
      exit={{ y: -40, opacity: 0 }}
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <Fake ref={fakeRef} />
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
  background: white;
`;
const Fake = styled.div`
  position: absolute;
  width: 100%;
  height: 20px;
  margin-top: -300px;
  left: 0;
  @media (max-width: ${(props) => props.theme.screen.mobile}) {
    top: 200px;
  }
`;
const BackArrow = styled.div`
  transition: 0.2s ease;
  display: flex;
  justify-content: flex-end;
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;

export default OpenCategory;
