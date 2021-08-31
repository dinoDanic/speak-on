import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import Container from "../ui/container/container.component";

const BigCat = ({ icon }) => {
  return (
    <Wrap
      animate={{ scale: 1, opacity: 1 }}
      initial={{ scale: 1.1, opacity: 0 }}
    >
      <Container>{icon}</Container>
    </Wrap>
  );
};

const Wrap = styled(motion.div)`
  position: absolute;
  background-color: rgba(255, 255, 255, 1);
  width: 100%;
  height: 100%;
  left: 0;
  z-index: 200;
`;

export default BigCat;
