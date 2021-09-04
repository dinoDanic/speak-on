import React, { useState, useRef } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

import Button from "../ui/button/button.component";
import Container from "../ui/container/container.component";
import CatButton from "./cat-button/cat-button.component";
import OpenCategory from "./open-category/open-category.component";

import { catsData } from "./cats.data";

const Cats = () => {
  const [currentCat, setCurrentCat] = useState(null);
  const fakeRef = useRef();

  const handleClick = () => {
    setTimeout(() => {
      fakeRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    }, 300);
  };

  return (
    <Container>
      <Relative>
        <AnimatePresence exitBeforeEnter>
          {!currentCat && (
            <Wrap
              exit={{ y: -40, opacity: 0, height: 0 }}
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              onClick={() => handleClick()}
            >
              {catsData?.map((data) => {
                return (
                  <CatButton
                    setCurrentCat={setCurrentCat}
                    key={data.id}
                    data={data}
                  />
                );
              })}
            </Wrap>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {currentCat && (
            <OpenCategory
              setCurrentCat={setCurrentCat}
              currentCat={currentCat}
            />
          )}
        </AnimatePresence>
        <Fake ref={fakeRef} />
        <ButtonWrap>
          <Button>COTIZA AQUÍ</Button>
        </ButtonWrap>
      </Relative>
    </Container>
  );
};
const Relative = styled.div`
  position: relative;
`;
const Fake = styled.div`
  position: absolute;
  width: 100%;
  height: 20px;
  margin-top: -100px;
  left: 0;
  @media (max-width: ${(props) => props.theme.screen.mobile}) {
    top: 200px;
  }
`;
const Wrap = styled(motion.div)`
  width: 100%;
  padding: 15px 0;
  margin-top: -50px;
  overflow: hidden;
  display: grid;
  padding: 50px 0;
  margin: -50px 0;
  grid-template-columns: repeat(3, auto);
  justify-content: center;
  align-items: center;
  gap: 40px;
  flex-wrap: wrap;
  position: relative;
  @media (max-width: ${(props) => props.theme.screen.mobile}) {
    grid-template-columns: repeat(2, auto);
    margin-top: -130px;
    gap: 20px;
  }
`;
const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export default Cats;
