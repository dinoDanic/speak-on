import React from "react";
import styled, { css } from "styled-components";
import Link from "next/link";
import { motion } from "framer-motion";

const SocialMedia = () => {
  return (
    <Container
      initial={{ x: 100 }}
      animate={{ x: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <Wrap>
        <Link passHref href="">
          <Facebook>
            <img src="/img/icons/fb.svg" alt="facebook icon" />
          </Facebook>
        </Link>
        <Link passHref href="">
          <Instagram>
            <img src="/img/icons/instagram.svg" alt="instagram icon" />
          </Instagram>
        </Link>
        <Link passHref href="">
          <WhatsUp>
            <img src="/img/icons/whatsup.svg" alt="whatsup icon" />
          </WhatsUp>
        </Link>
      </Wrap>
    </Container>
  );
};

const items = css`
  margin-bottom: 20px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

const Container = styled(motion.div)`
  position: fixed;
  right: 60px;
  top: 170px;
  z-index: 200;
  @media (max-width: ${(props) => props.theme.screen.mobile}) {
    position: relative;
    right: auto;
    top: auto;
    width: 50%;
  }
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  @media (max-width: ${(props) => props.theme.screen.mobile}) {
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    img {
    }
  }
`;
const Facebook = styled.div`
  ${items};
  img {
    margin-left: 4px !important;
  }
`;
const Instagram = styled.div`
  ${items};
`;
const WhatsUp = styled.div`
  ${items};
`;
export default SocialMedia;
