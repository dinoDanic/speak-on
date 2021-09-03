import React from "react";
import styled, { css } from "styled-components";
import Image from "next/image";
import Link from "next/link";

import FacebookSvg from "../../img/icons/fb.svg";
import InstagramSvg from "../../img/icons/instagram.svg";
import WhatsUpSvg from "../../img/icons/whatsup.svg";

const SocialMedia = () => {
  return (
    <Container>
      <Wrap>
        <Link href="">
          <Facebook>
            <Image src={FacebookSvg} alt="facebook icon" />
          </Facebook>
        </Link>
        <Link href="">
          <Instagram>
            <Image src={InstagramSvg} alt="instagram icon" />
          </Instagram>
        </Link>
        <Link href="">
          <WhatsUp>
            <Image src={WhatsUpSvg} alt="whatsup icon" />
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

const Container = styled.div`
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
