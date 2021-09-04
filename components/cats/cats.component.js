import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import Button from "../ui/button/button.component";
import Container from "../ui/container/container.component";
import CatButton from "./cat-button/cat-button.component";
import BigCat from "../big-cat/big-cat.component";

import { catsData } from "./cats.data";

const Cats = () => {
  const [isActive, setIsActive] = useState(false);
  const wrapRef = useRef();

  useEffect(() => {
    console.log(isActive);
  }, [isActive, setIsActive]);

  return (
    <Container>
      <Wrap ref={wrapRef} isActive={isActive}>
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
  height: ${({ isActive }) => (isActive ? "400px" : "fit-content")};
  overflow: hidden;
  display: grid;
  padding: 50px 0;
  margin: -50px 0;
  grid-template-columns: repeat(3, auto);
  justify-content: center;
  align-items: center;
  transition: 0.5s ease;
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
