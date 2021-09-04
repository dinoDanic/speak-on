import React from "react";
import styled from "styled-components";

const Seperator = () => {
  return (
    <Container>
      <Sep>
        <Shadow>
          <img src="/img/home/blur.png" alt="shadow" />
        </Shadow>
      </Sep>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 150px;
  width: 100%;
  margin-top: -80px;
  overflow: hidden;
  @media (max-width: 700px) {
    margin-top: -20px;
  }
`;

const Sep = styled.div`
  width: 120%;
  position: absolute;
  display: flex;
  justify-content: center;
  overflow: hidden;
  height: 200px;
  background-color: white;
  border-top-left-radius: 2000px 300px;
  border-top-right-radius: 2000px 300px;
`;
const Shadow = styled.div`
  position: absolute;
  width: 60%;
  margin-top: -100px;
  height: 200px;
  pointer-events: none;
  @media (max-width: ${(props) => props.theme.screen.mobile}) {
    width: 100%;
  }
`;

export default Seperator;
