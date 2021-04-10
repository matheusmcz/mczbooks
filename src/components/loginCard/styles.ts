import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin-left: 7.6rem;

  .email {
    margin-top: 2.5rem;
  }

  .passawordContainer {
    position: relative;
    margin-top: 1rem;
    width: 100%;
  }

  input {
    height: 60px;
    min-width: 288px;
    width: 100%;
    padding: 0.5rem 0 0 1rem;
    position: relative;

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

  top: 0;
  right: 0;
  margin-top: 0.7rem;
  margin-right: 0.7rem;

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
