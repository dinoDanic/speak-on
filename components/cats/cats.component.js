import React, { useState } from "react";
import styled from "styled-components";
import Button from "../ui/button/button.component";
import Container from "../ui/container/container.component";
import CatButton from "./cat-button/cat-button.component";

import { catsData } from "./cats.data";

import { motion } from "framer-motion";

const Cats = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Container>
      <Wrap>
        {catsData?.map((cat) => (
          <CatButton
            setIsActive={setIsActive}
            isActive={isActive}
            key={cat.icon}
            text={cat.text}
            icon={cat.icon}
          />
        ))}
      </Wrap>
      <ButtonWrap>
        <Button>COTIZA AQUÍ</Button>
      </ButtonWrap>
    </Container>
  );
};

const Wrap = styled(motion.div)`
  width: 100%;
  display: grid !important;
  grid-template-columns: repeat(auto-fit, minmax(170px, auto));
  row-gap: 60px;
  column-gap: 60px;
  align-content: center;
  justify-content: center;
`;
const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

export default Cats;
