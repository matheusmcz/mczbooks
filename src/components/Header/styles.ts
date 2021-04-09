import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  margin: 42px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent;
  flex-direction: row;
`;

export const HeaderText = styled.span`
  display: flex;
  align-items: center;

  button {
    background: transparent;
    border: none;
    padding-left: 1rem;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    margin-left: 1rem;
    font-family: "Heebo", sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 2rem;
    line-height: 40px;
  }
`;
