import React from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Link from "next/link";

const Menu = ({ setIsOn, triggerRef }) => {
  const router = useRouter();

  const handleScroll = () => {
    setIsOn(false);
    triggerRef.current.checked = false;
    window.scrollTo({
      top: document.documentElement.scrollHeight - 1500,
      behavior: "auto",
    });
  };
  return (
    <Container>
      <Items>
        <Link passHref={true} href="/">
          <Item
            value="/"
            style={{
              color: router.pathname === "/" && "#00C2FF",
            }}
          >
            Inicio
          </Item>
        </Link>
        <Link passHref={true} href="/soluciones">
          <Item
            style={{
              color: router.pathname === "/soluciones" && "#00C2FF",
            }}
          >
            Soluciones
          </Item>
        </Link>
        <Item onClick={() => handleScroll()}>Contacto</Item>
        <Link passHref={true} href="/empty">
          <Item
            style={{
              color: router.pathname === "/empty" && "#00C2FF",
            }}
          >
            Empty
          </Item>
        </Link>
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
