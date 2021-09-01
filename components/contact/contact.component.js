import React from "react";
import styled from "styled-components";
import Container from "../ui/container/container.component";

const Contact = () => {
  return (
    <Container>
      <Form>
        <Column></Column>
        <Column>info</Column>
      </Form>
    </Container>
  );
};

const Form = styled.div`
  display: flex;
`;
const Column = styled.div`
  flex: 1;
`;

export default Contact;
