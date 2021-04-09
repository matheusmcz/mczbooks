import { Container, Content, HeaderText } from "./styles";

export function Header() {
  return (
    <Container>
      <Content>
        <img src="../../assets/blackLogo.svg" alt="ioasys Logo" />
        <span>Books</span>
      </Content>
      <HeaderText>
        Bem vindo, <strong>Guilherme</strong>
        <button>
          <img src="./assets/logOut.svg" alt="" />
        </button>
      </HeaderText>
    </Container>
  );
}
