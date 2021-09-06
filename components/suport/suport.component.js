import React from "react";
import styled from "styled-components";

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
          <ButtonHolder>
            <Button>contactanos</Button>
          </ButtonHolder>
        </Column>
        <Column>
          <img
            src="/img/home/suporte_image.png"
            width="100%"
            alt="support image"
          />
        </Column>
      </Content>
    </Container>
  );
};

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin-bottom: 50px;
  @media (max-width: ${(props) => props.theme.screen.mobile}) {
    margin-top: -50px;
  }
`;
const Column = styled.div`
  min-width: 300px;
  flex: 1;
`;
const Space = styled.div`
  margin-bottom: 19px;
`;

const ButtonHolder = styled.div`
  @media (max-width: ${(props) => props.theme.screen.mobile}) {
    display: flex;
    justify-content: center;
  }
`;

export default Suport;
