import styled from "styled-components";

export const Container = styled.div`
  justify-content: space-between;
  padding: 48px;
  border: none;
  display: flex;

  .gap {
    width: 48px;
  }

  @media (max-width: 780px) {
    justify-items: center;
    flex-direction: column;
    align-items: center;

    .gap {
      width: 0;
      height: 24px;
    }
  }

  @media (min-width: 780px) {
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
  }

  .resume {
    margin-bottom: 1rem;
  }

  img {
    width: 100%;
  }
`;

export const Description = styled.div`
  display: column;

  width: 100%;
  max-width: 276px;
  min-width: 240px;
  max-height: 512px;

  @media (min-width: 780px) {
    overflow-y: auto;

    ::-webkit-scrollbar {
      width: 4px;
      margin-left: 5px;
    }
    ::-webkit-scrollbar-track {
      display: none;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #ab2680;
      border-radius: 4px;
    }
    ::-webkit-scrollbar-button {
      height: 218px;
    }
  }

  @media (max-width: 780px) {
    overflow: hidden;
  }

  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 4px;
    margin-left: 5px;
  }
  ::-webkit-scrollbar-track {
    display: none;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #ab2680;
    border-radius: 4px;
  }
  ::-webkit-scrollbar-button {
    height: 218px;
  }

  strong {
    font-family: "Heebo", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
  }
`;

export const DescriptionHeader = styled.header`
  display: flex;
  flex-direction: column;

  span {
    font-family: "Heebo", sans-serif;
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 40px;
  }

  p {
    font-family: "Heebo", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 0.9rem;
    line-height: 1.2rem;
    color: #ab2680;
    margin-bottom: 2rem;
  }
`;

export const Informations = styled.form`
  display: grid;
  grid-template-columns: auto auto;

  ul {
    list-style-type: none;
    font-family: "Heebo", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 0.8rem;
    text-align: left;
    margin-top: 1rem;
    margin-bottom: 2rem;

    & + ul {
      font-family: "Heebo", sans-serif;
      font-weight: normal;
      font-size: 0.8rem;
      text-align: right;
      color: #999999;
    }
  }
`;

export const Resume = styled.div`
  font-family: "Heebo", sans-serif;
  font-weight: normal;
  font-size: 0.8rem;
  line-height: 20px;
  color: #999999;
  text-align: justify;
  margin-top: 1rem;

  img {
    width: 16px;
    height: 16px;
  }
`;

export const CloseModal = styled.button`
  position: absolute;
  display: flex;
  background: #ffffff;
  border: 1px solid rgba(51, 51, 51, 0.2);
  box-sizing: border-box;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;

  right: 0;
  top: 0;
  margin: 1rem 1rem 0 0;
`;
