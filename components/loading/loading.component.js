import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <Wraper exit={{ opacity: 0 }}>
      <Content
        initial={{ rotate: -103 }}
        animate={{ rotate: -153 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "mirror" }}
      >
        <img src="/img/logo-icon.svg" width="60" alt="logo image" />
      </Content>
    </Wraper>
  );
};

const Wraper = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.ui.primary};
  z-index: 999;
`;
const Content = styled(motion.div)``;
export default Loading;
