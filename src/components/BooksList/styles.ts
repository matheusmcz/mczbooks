import styled from "styled-components";

export const Container = styled.div`
  background: no-repeat url("./assets/listBackground.svg");
  background-size: cover;
  height: 100vh;
  overflow: auto;
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 42px auto;
  display: grid;
  grid-gap: 1rem;
  justify-items: center;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1120px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 600px) {
    margin: 0 auto 0 auto;
  }
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.1rem 1.2rem;

  background: #ffffff;
  box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
  border-radius: 0.25rem;
  cursor: pointer;

  max-width: 272px;
  max-height: 160px;

  @media (max-width: 600px) {
    width: 100%;
  }

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

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    max-width: 127px;
    max-height: 20px;
  }

  span.author {
    font-family: "Heebo", sans-serif;
    font-size: 0.7rem;
    line-height: 20px;
    font-weight: normal;
    color: #ab2680;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export const BookInfo = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 127px;
  span {
    font-family: "Heebo", sans-serif;
    font-weight: normal;
    font-size: 0.8rem;
    line-height: 20px;
    color: #999999;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  max-width: 1120px;
  margin: -1rem auto;

  @media (max-width: 600px) {
    justify-content: center;
    margin-top: 16px;
    margin-bottom: 16px;
  }

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

    &:focus {
      outline: 0;
    }

    & + button {
      margin-left: 0.5rem;
    }
  }
`;
