import { useAuth } from "../../contexts/auth";
import { Container, Content, HeaderText } from "./styles";

export function Header() {
  const { user, signOut } = useAuth();
  const logOut = () => {
    signOut();
  };

  return (
    <Container>
      <Content>
        <img src="../../assets/blackLogo.svg" alt="ioasys Logo" />
        <span>Books</span>
      </Content>
      <HeaderText>
        <span>
          Bem vindo, <strong>{user.name}</strong>
        </span>
        <button onClick={logOut}>
          <img src="./assets/logOut.svg" alt="" />
        </button>
      </HeaderText>
    </Container>
  );
}
