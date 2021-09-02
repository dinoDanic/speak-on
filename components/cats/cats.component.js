import React, { useState, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import Button from "../ui/button/button.component";
import Container from "../ui/container/container.component";
import CatButton from "./cat-button/cat-button.component";
import BigCat from "../big-cat/big-cat.component";

import { catsData } from "./cats.data";

const Cats = () => {
  const [isActive, setIsActive] = useState(false);
  const [isBig, setIsBig] = useState(false);
  const wrapRef = useRef();

  return (
    <Container>
      <Wrap onClick={() => setIsBig(!isBig)} ref={wrapRef}>
        {catsData?.map((data) => {
          return (
            <CatButton
              setIsActive={setIsActive}
              isActive={isActive}
              key={data.id}
              data={data}
            />
          );
        })}
      </Wrap>
      <ButtonWrap>
        <Button>COTIZA AQUÍ</Button>
      </ButtonWrap>
    </Container>
  );
};

const Wrap = styled(motion.div)`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(3, auto);
  justify-content: center;
  align-items: center;
  gap: 40px;
  flex-wrap: wrap;
  position: relative;
  @media (max-width: ${(props) => props.theme.screen.mobile}) {
    grid-template-columns: repeat(2, auto);
  }
`;
const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export default Cats;
