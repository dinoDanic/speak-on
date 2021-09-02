import React from "react";
import styled from "styled-components";

import BigCat from "../../components/big-cat/big-cat.component";
import ImageSeperator from "../../components/image-seperator/image-seperator.component";

import { catsData } from "../../components/cats/cats.data";
import Container from "../../components/ui/container/container.component";

const Soluciones = () => {
  console.log(catsData);
  return (
    <Wrap>
      <ImageSeperator image top={false}>
        <Title>how can we help</Title>
      </ImageSeperator>
      <Container>
        {catsData?.map((data) => (
          <BigCat normal data={data} key={data.text} />
        ))}
      </Container>
    </Wrap>
  );
};
const Wrap = styled.div``;
const Title = styled.div`
  font-size: 46px;
  color: white;
  font-weight: 100;
`;

export default Soluciones;
