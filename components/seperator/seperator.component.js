import React from "react";
import styled from "styled-components";

const Seperator = () => {
  return (
    <Container>
      <Sep></Sep>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 150px;
  width: 100%;
  margin-top: -60px;
  overflow: hidden;
`;

const Sep = styled.div`
  width: 120%;
  position: absolute;
  height: 150px;
  background-color: white;
  border-top-left-radius: 100% 250px;
  border-top-right-radius: 100% 250px;
  box-shadow: inset 0px 30px 43px -34px #00c2ff;
`;

export default Seperator;
