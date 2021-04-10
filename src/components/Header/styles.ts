import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent;
  flex-direction: row;
  padding-top: 42px;

  @media (max-width: 1120px) {
    padding: 42px 16px;
  }
`;

export const HeaderText = styled.span`
  display: flex;
  align-items: center;

  span {
    @media (max-width: 600px) {
      display: none;
    }
  }

  strong {
    margin-left: 6px;
  }

  button {
    background: transparent;
    border: none;
    padding-left: 1rem;

    &:focus {
      outline: 0;
    }
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
