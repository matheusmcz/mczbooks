import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 368px;
  max-height: 224px;
  margin-top: 18rem;
  margin-bottom: 18rem;
  margin-left: 7rem;

  .email {
    margin-top: 2.5rem;
  }

  input {
    height: 60px;
    max-width: 368px;
    padding: 0.5rem 0 0 1rem;

    border-radius: 0.25rem;
    background: rgba(0, 0, 0, 0.32);
    backdrop-filter: blur(2px);
    border: none;
    outline: none;

    color: #ffffff;
    font-family: "Heebo", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 2rem;

    & + input {
      margin-top: 1rem;
    }

    &::placeholder {
      font-family: "Heebo", sans-serif;
      font-weight: 400;
      color: #ffffff;
      opacity: 0.5;
      position: absolute;
      margin-bottom: 0.2rem;
      font-size: initial;
    }
  }
`;

export const Title = styled.span`
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: 300;
  font-family: "Heebo";
  color: #ffffff;

  img {
    padding-right: 1rem;
  }
`;

export const SubmitButton = styled.button`
  position: absolute;
  padding: 0.6rem 1.5rem;

  bottom: 0;
  right: 0;
  margin-bottom: 10px;
  margin-right: 12px;

  border-radius: 44px;
  border: none;

  font-family: "Heebo", sans-serif;
  font-weight: 500;
  font-size: 1rem;
  line-height: 20px;
  color: #b22e6f;
  background: #ffffff;
  text-align: center;

  outline: none;
`;
