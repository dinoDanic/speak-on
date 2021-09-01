import React from "react";
import styled, { css } from "styled-components";
import Image from "next/image";

import FacebookSvg from "../../img/icons/fb.svg";
import InstagramSvg from "../../img/icons/instagram.svg";
import WhatsUpSvg from "../../img/icons/whatsup.svg";

const SocialMedia = () => {
  return (
    <Container>
      <Wrap>
        <Facebook>
          <Image src={FacebookSvg} alt="facebook icon" />
        </Facebook>
        <Instagram>
          <Image src={InstagramSvg} alt="instagram icon" />
        </Instagram>
        <WhatsUp>
          <Image src={WhatsUpSvg} alt="whatsup icon" />
        </WhatsUp>
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

const Container = styled.div`
  position: fixed;
  right: 60px;
  top: 170px;
  z-index: 200;
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
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