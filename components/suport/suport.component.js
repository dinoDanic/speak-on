import React from "react";
import styled from "styled-components";
import Image from "next/image";

import SupportImage from "../../img/home/suporte_image.png";

import Container from "../ui/container/container.component";
import Text from "../ui/typo/text.type";
import Title from "../ui/typo/title.typo";
import Button from "../ui/button/button.component";

const Suport = () => {
  return (
    <Container>
      <Content>
        <Column>
          <Title>Soporte con resultados a nuestros clientes</Title>
          <Space />
          <Text>
            Somos especialistas en el servicio de Outsourcing para toda empresa
            que necesite soluciones de forma eficiente y profesional. <br />
            <br />
            Somos considerados como la empresa preferida por miles de clientes
            alrededor de México. Contamos con personal altamente capacitado y
            dispuesto a brindar la mejor atención y compromiso con nuestros
            colaboradores.
          </Text>
          <Button>contactanos</Button>
        </Column>
        <Column>
          <Image src={SupportImage} alt="support image" />
        </Column>
      </Content>
    </Container>
  );
};

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;
const Column = styled.div`
  min-width: 200px;
  flex: 1;
`;
const Space = styled.div`
  margin-bottom: 19px;
`;

export default Suport;
