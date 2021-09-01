import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import { motion } from "framer-motion";

import telemarketing from "../../../img/icons/mic.svg";
import ContactCenterSvg from "../../../img/icons/contactcenter.svg";
import Attenction from "../../../img/icons/attencion.svg";
import money from "../../../img/icons/money.svg";
import base from "../../../img/icons/base.svg";
import lock from "../../../img/icons/lock.svg";
import ppl from "../../../img/icons/ppl.svg";
import mon from "../../../img/icons/mon.svg";
import info from "../../../img/icons/info.svg";
import files from "../../../img/icons/files.svg";
import reports from "../../../img/icons/reports.svg";
import fin from "../../../img/icons/fin.svg";

import BigCat from "../../big-cat/big-cat.component";

const icons = {
  telemarketing,
  ContactCenterSvg,
  Attenction,
  money,
  lock,
  base,
  ppl,
  mon,
  info,
  files,
  reports,
  fin,
};

const textMotion = {
  rest: { opacity: 1 },
  hover: {
    opacity: 0,
  },
};

const iconMotion = {
  rest: { y: 0 },
  hover: {
    y: 30,
  },
};

const CatButton = ({ text, icon, setIsActive, isActive }) => {
  const [isBig, setIsBig] = useState(false);
  const outerMotion = {
    rest: { y: 0 },
    hover: {
      y: -10,
      backgroundImage:
        "linear-gradient(#1e4e9d, #65c1c2), linear-gradient(90deg, #65c1c2 -7.48%, #1e4e9d 173.45%)",
    },
  };
  return (
    <>
      <Outer
        whileHover="hover"
        animate="rest"
        variants={outerMotion}
        onClick={() => setIsBig(true)}
      >
        <Icon variants={iconMotion}>
          <Image src={icons[icon]} alt="telemarketing icon" />
        </Icon>
        <Text variants={textMotion}>{text}</Text>
      </Outer>
      {isBig && <BigCat icon={icon} />}
    </>
  );
};

const Outer = styled(motion.div)`
  width: 176px;
  height: 176px;
  border: double 1px transparent;
  border-radius: 100%;
  background-image: linear-gradient(#fff, #fff),
    ${(props) => props.theme.colors.ui.primaryGradient};
  background-origin: border-box;
  background-clip: content-box, border-box;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  cursor: pointer;
`;

const Text = styled(motion.div)`
  color: ${(props) => props.theme.colors.font.primary};
  line-height: 19px;
  letter-spacing: 0.12em;
  margin-top: 20px;
  max-width: 120px;
  min-height: 40px;
  text-align: center;
`;
const Icon = styled(motion.div)``;

export default CatButton;
