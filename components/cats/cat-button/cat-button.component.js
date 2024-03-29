import React, { useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

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

const CatButton = ({ data, setCurrentCat }) => {
  const { title, icon } = data;
  const fakeRef = useRef();

  const outerMotion = {
    rest: { y: 0 },
    hover: {
      y: -10,
      backgroundImage:
        "linear-gradient(#1e4e9d, #65c1c2), linear-gradient(90deg, #65c1c2 -7.48%, #1e4e9d 173.45%)",
    },
  };

  const handleClick = () => {
    /* setTimeout(() => {
      fakeRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    }, 200); */
    setCurrentCat(title);
  };

  return (
    <Wrap>
      {/* <Fake ref={fakeRef} /> */}
      <Outer
        whileHover="hover"
        animate="rest"
        variants={outerMotion}
        onClick={() => handleClick()}
      >
        <Icon variants={iconMotion}>
          <Img src={icon} alt="telemarketing icon" />
        </Icon>
        <Text variants={textMotion}>{title}</Text>
      </Outer>
      {/*       <AnimatePresence>
        {isBig && <BigCat data={data} setIsBig={setIsBig} />}
      </AnimatePresence> */}
    </Wrap>
  );
};

const Img = styled.img``;

const Fake = styled.div`
  position: absolute;
  width: 20px;

  width: 100%;
  height: 20px;
  left: 0;
  top: 0;
`;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
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
  &:hover {
    img {
      filter: brightness(0) invert(1);
    }
  }
  @media (max-width: ${(props) => props.theme.screen.mobile}) {
    width: 150px;
    height: 150px;
  }
`;

const Text = styled(motion.div)`
  color: ${(props) => props.theme.colors.font.primary};
  line-height: 19px;
  letter-spacing: 0.12em;
  margin-top: 20px;
  max-width: 120px;
  min-height: 40px;
  text-align: center;
  @media (max-width: ${(props) => props.theme.screen.mobile}) {
    font-size: ${(props) => props.theme.sizes.font.small2};
    max-width: 100px;
    margin-top: 0px;
  }
`;
const Icon = styled(motion.div)`
  @media (max-width: ${(props) => props.theme.screen.mobile}) {
    img {
      width: 36px;
    }
  }
`;

export default CatButton;
