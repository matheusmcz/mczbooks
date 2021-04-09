import { Container, SubmitButton, Title } from "./styles";

export function LoginCard() {
  return (
    <Container>
      <Title>
        <img src="./assets/logo.svg" alt="" />
        Books
      </Title>
      <input type="email" className="email" id="email" placeholder="Email" />
      <input type="password" placeholder="Senha" />
      <SubmitButton type="submit">Entrar</SubmitButton>
    </Container>
  );
}
