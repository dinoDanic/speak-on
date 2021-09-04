import { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { ScrollContext } from "../context/scroll.context";

import Cats from "../components/cats/cats.component";
import Hero from "../components/hero/hero.component";
import ImageSeperator from "../components/image-seperator/image-seperator.component";
import Seperator from "../components/seperator/seperator.component";
import Suport from "../components/suport/suport.component";
import Metatags from "../components/Metatags";

export default function Home() {
  const scroll = useContext(ScrollContext);
  const scrollRef = useRef();

  useEffect(() => {
    if (scroll.scrollDown === true) {
      scrollRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    }
  }, [scroll]);

  return (
    <>
      <Metatags
        title="Home Page"
        description="Especialistas en Outsourcing para toda empresa"
      />
      <HomeWrap
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        exit={{ opacity: 0 }}
      >
        <Hero />
        <Seperator />
        <Suport />
        <ImageSeperator image>
          <Title>How we can help</Title>
        </ImageSeperator>
        <ScrollRef ref={scrollRef} />
        <Cats />
      </HomeWrap>
    </>
  );
}

const HomeWrap = styled(motion.div)``;

const Title = styled.div`
  font-size: ${(props) => props.theme.sizes.font.xLarge};
  color: white;
  font-weight: 100;
`;

const ScrollRef = styled.div``;
