import React from "react";
import styled from "styled-components";

const Menu = () => {
  return (
    <Container>
      <Items>
        <Item>Inicio</Item>
        <Item>Soluciones</Item>
        <Item>Contacto</Item>
        <Item>Empty</Item>
      </Items>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
`;
const Items = styled.ul`
  display: flex;
`;
const Item = styled.li`
  margin-left: 55px;
  list-style: none;
  cursor: pointer;
  font-weight: lighter;
`;
export default Menu;
