import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Menu = () => {
  return (
    <Container>
      <Items>
        <Item>Inicio</Item>
        <Link href="/soluciones">
          <Item>Soluciones</Item>
        </Link>
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
  @media (max-width: ${(props) => props.theme.screen.mobile}) {
    flex-direction: column;
    color: white;
    text-align: center;
    li {
      margin-bottom: 15px;
      margin-left: 0;
      font-size: ${(props) => props.theme.sizes.font.mid2};
    }
  }
`;
const Item = styled.li`
  margin-left: 55px;
  list-style: none;
  cursor: pointer;
  font-weight: lighter;
  &:hover {
    color: ${(props) => props.theme.colors.font.secondary};
  }
`;
export default Menu;
