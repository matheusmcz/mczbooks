import styled from "styled-components";

export const Container = styled.form`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 3.1rem;
  justify-content: center;
  align-items: center;

  img {
    max-width: 349px;
    max-height: 512px;
  }
`;

export const Description = styled.div`
  max-width: 276px;
  display: column;
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
  }
`;
