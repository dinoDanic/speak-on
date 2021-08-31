const Seperator = () => {
  return (
    <Container>
      <svg
        width="100%"
        viewBox="0 0 2925 130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 89.3773C1142.28 -29.5792 1782.72 -30.0054 2925 89.3773V130C2925 130 2299.38 130 1462.5 130C625.625 130 0 130 0 130V89.3773Z"
          fill="white"
        />
      </svg>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  background-color: blue;
  border-top-left-radius: 100% 60px;
  margin-top: -4%;
`;
