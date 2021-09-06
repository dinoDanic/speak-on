import React from "react";
import styled from "styled-components";

import { Column, Row } from "../ui/flex/flex-component";
import Container from "../ui/container/container.component";
import Input from "../ui/input/input.component";
import TextArea from "../ui/text-area/text-area.component";
import Button from "../ui/button/button.component";

const Contact = () => {
  return (
    <Container>
      <Wrap>
        <Column>
          <Form
            action="https://formsubmit.co/dino.danic@gmail.com"
            method="POST"
          >
            <Row>
              <Info>nombre:</Info>
              <Input
                type="text"
                name="name"
                required
                placeholder="Ejem. Arturo Sánchez Aguilar"
              />
            </Row>
            <Row>
              <Info>correo:</Info>
              <Input
                type="email"
                name="email"
                required
                placeholder="arturosanchez@gmail.com"
              />
            </Row>
            <Row>
              <Info>servicio:</Info>
              <Input type="text" name="category" placeholder="Telemarketing" />
            </Row>
            <Row>
              <Info>mensaje:</Info>
              <TextArea type="text" name="name" />
            </Row>
            <Row>
              <Info />
              <Button variant="border" type="submit">
                enviar
              </Button>
            </Row>
          </Form>
        </Column>
        <Column>
          <Title>UN PROFESIONAL SE PONDRÁ EN CONTACTO CONTIGO</Title>
          <Message>
            Estamos para resolver cualquier duda que pueda llegar a tener y
            brindarle la solución que mejor se acomode a sus necesidades
          </Message>
          <Line />
          <Numbers>
            T.: 55-4567-5830
            <br />
            M.: 4567-5830
          </Numbers>
          <Line />
          <Email>info@speakon.com</Email>
        </Column>
      </Wrap>
    </Container>
  );
};

const Wrap = styled.div`
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
  margin-top: -20px;
  margin-bottom: 50px;
  @media (max-width: ${(props) => props.theme.screen.mobile}) {
    margin-top: -70px;
  }
`;

const Form = styled.form``;

const Title = styled.div`
  color: ${(props) => props.theme.colors.font.primary};
  margin-top: -2px;
  margin-bottom: 15px;
`;
const Message = styled.div`
  font-weight: lighter;
  font-size: ${(props) => props.theme.sizes.font.small};
  margin-bottom: 20px;
`;
const Numbers = styled.div`
  margin: 30px 0;
  color: ${(props) => props.theme.colors.font.primary};
  font-size: ${(props) => props.theme.sizes.font.small};
`;
const Email = styled.div`
  margin-top: 30px;
  color: ${(props) => props.theme.colors.font.primary};
  font-size: ${(props) => props.theme.sizes.font.small};
`;

const Info = styled.div`
  min-width: 100px;
  display: flex;
  justify-content: flex-end;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.font.primary};
  font-size: ${(props) => props.theme.sizes.font.small};
  margin-top: 3px;
  margin-right: 20px;
`;
const Line = styled.div`
  height: 1px;
  width: 100%;
  background: ${(props) => props.theme.colors.ui.primaryGradient};
`;
const Spacer = styled.div`
  margin-right: 50px;
`;

export default Contact;
