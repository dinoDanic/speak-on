import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useRouter } from "next/router";

import Menu from "../menu/menu.component";
import SocialMedia from "../../social-media/social-media.component";

const MenuMobile = () => {
  const router = useRouter();
  const [isOn, setIsOn] = useState(false);
  const [currentRoute, setCurrentRoute] = useState(router.pathname);
  const triggerRef = useRef();
  useEffect(() => {
    if (router !== currentRoute) {
      setIsOn(false);
      triggerRef.current.checked = false;
    }
  }, [router, currentRoute]);
  return (
    <Wrap>
      <Container>
        <Bar>
          <MenuToggle onClick={() => setIsOn(!isOn)}>
            <Trigger type="checkbox" ref={triggerRef} />
            <Span></Span>
            <Span></Span>
            <Span></Span>
          </MenuToggle>
        </Bar>
      </Container>
      {isOn && (
        <MenuHolder
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "tween" }}
        >
          <Logo>
            <img src="/img/logo.svg" width="228px" alt="speak on logo image" />
          </Logo>
          <Menu setIsOn={setIsOn} triggerRef={triggerRef} />
          <SocialMedia />
        </MenuHolder>
      )}
    </Wrap>
  );
};

const Wrap = styled.div`
  @media (min-width: ${(props) => props.theme.screen.mobile}) {
    display: none;
  }
`;

const Container = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 250;
`;

const Logo = styled.div``;

const MenuHolder = styled(motion.div)`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: ${(props) => props.theme.colors.ui.primary2};
  z-index: 200;
`;

const Bar = styled.div`
  width: 100%;
  padding: 10px 10px;
  display: flex;
  justify-content: flex-end;
`;
const MenuToggle = styled.div`
  display: block;
  position: relative;

  z-index: 1;

  -webkit-user-select: none;
  user-select: none;
`;
const Trigger = styled.input`
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -7px;
  left: -5px;
  cursor: pointer;
  opacity: 0; /* hide this */
  z-index: 2; /* and place it over the hamburger */
  -webkit-touch-callout: none;
  &:checked ~ span:nth-last-child(3) {
    opacity: 1;
    transform: rotate(45deg) translate(1px, -1px);
  }
  &:checked ~ span:nth-last-child(2) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }
  &:checked ~ span:nth-last-child(1) {
    transform: rotate(-45deg) translate(0, -1px);
  }
  &:checked ~ ul {
    transform: none;
  }
`;
const Span = styled.span`
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;
  background: ${(props) => props.theme.colors.ui.secondary};
  border-radius: 3px;

  z-index: 1;

  transform-origin: 4px 0px;

  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;

  &:first-child {
    transform-origin: 0% 0%;
  }
  &:nth-last-child(2) {
    transform-origin: 0% 100%;
  }
`;
export default MenuMobile;
