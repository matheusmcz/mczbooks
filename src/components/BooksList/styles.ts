import styled from "styled-components";

export const Content = styled.div`
  max-width: 1120px;
  margin: 42px auto;
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 1rem;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.2rem 0 1.2rem 0;

  background: #ffffff;
  box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
  border-radius: 0.25rem;
  cursor: pointer;

  max-width: 272px;

  img {
    width: 81px;
    height: 122px;
    margin-right: 1rem;
  }
`;

export const CardDescription = styled.div`
  display: column;
`;

export const CardTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  span {
    font-family: "Heebo", sans-serif;
    font-size: 0.9rem;
    font-weight: 500;
    line-height: 20px;
  }

  span.author {
    font-family: "Heebo", sans-serif;
    font-size: 0.7rem;
    line-height: 20px;
    font-weight: normal;
    color: #ab2680;
  }
`;

export const BookInfo = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-family: "Heebo", sans-serif;
    font-weight: normal;
    font-size: 0.8rem;
    line-height: 20px;
    color: #999999;
  }
`;

export const Container = styled.div`
  background: no-repeat url("./assets/listBackground.svg");
  background-size: cover;
  width: 100%;
  height: 100vh;
  display: inline-table;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  max-width: 1120px;
  margin: -1rem auto;

  span {
    font-family: "Heebo", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.3rem;

    margin-right: 1rem;
  }

  button {
    background: transparent;
    border: none;

    & + button {
      margin-left: 0.5rem;
    }
  }
`;
