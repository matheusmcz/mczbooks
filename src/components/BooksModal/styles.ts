import styled from "styled-components";

export const Container = styled.form`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 3.1rem;
  justify-content: center;
  padding: 48px 0;
  border: none;

  .resume {
    margin-bottom: 1rem;
  }

  img {
    max-width: 349px;
    max-height: 512px;
  }
`;

export const Description = styled.div`
  max-width: 276px;
  display: column;
  max-height: 512px;

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
