import styled from "styled-components";

import Cats from "../components/cats/cats.component";
import Contact from "../components/contact/contact.component";
import Hero from "../components/hero/hero.component";
import ImageSeperator from "../components/image-seperator/image-seperator.component";
import Map from "../components/map/map.component";
import Seperator from "../components/seperator/seperator.component";
import Suport from "../components/suport/suport.component";

import Slider from "../components/slider/slider.component";

export default function Home() {
  return (
    <>
      <Hero />
      <Seperator />
      <Suport />
      <ImageSeperator image>
        <Title>How we can help</Title>
      </ImageSeperator>
      <Cats />
      <ImageSeperator>
        <Slider />
      </ImageSeperator>
      <Contact />
      <Map />
    </>
  );
}

const Title = styled.div`
  font-size: 46px;
  color: white;
  font-weight: 100;
`;
