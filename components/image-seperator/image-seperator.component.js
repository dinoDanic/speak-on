import React from "react";
import styled from "styled-components";

const ImageSeperator = () => {
  return (
    <Container>
      <Content>content</Content>
      <Sep></Sep>
      <Sep2></Sep2>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 50px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: fit-content;
  min-height: 500px;
  overflow: hidden;
`;

const Content = styled.div`
  margin-top: -200px;
`;

const Sep = styled.div`
  width: 120%;
  position: absolute;
  top: 0;
  height: 100%;
  background: linear-gradient(90deg, #65c1c2 -7.48%, #1e4e9d 173.45%);
  border-top-left-radius: 100% 250px;
  border-top-right-radius: 100% 250px;
  z-index: -1;
`;
const Sep2 = styled.div`
  width: 120%;
  position: absolute;
  height: 150px;
  bottom: 0px;
  background-color: #ffffff;
  border-top-left-radius: 100% 250px;
  border-top-right-radius: 100% 250px;
  z-index: -1;
`;

export default ImageSeperator;
