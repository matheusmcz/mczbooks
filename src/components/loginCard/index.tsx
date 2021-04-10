import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/auth";
import { Container, SubmitButton, Title } from "./styles";

interface LoginCredentials {
  email: string;
  password: string;
}

export function LoginCard() {
  const history = useHistory();

  const [loginCredentials, setLoginCredentials] = useState<LoginCredentials>({
    email: "",
    password: "",
  } as LoginCredentials);

  const { signIn } = useAuth();

  async function login(event: any) {
    event.preventDefault();
    await signIn({
      email: loginCredentials.email,
      password: loginCredentials.password,
    });

    history.push("/catalogo");
  }

  return (
    <Container>
      <Title>
        <img src="./assets/logo.svg" alt="" />
        Books
      </Title>
      <form onSubmit={login}>
        <input
          type="email"
          className="email"
          id="email"
          placeholder="Email"
          value={loginCredentials.email}
          onChange={(event) =>
            setLoginCredentials({
              ...loginCredentials,
              email: event.target.value,
            })
          }
        />
        <div className="passawordContainer">
          <input
            type="password"
            placeholder="Senha"
            value={loginCredentials.password}
            onChange={(event) =>
              setLoginCredentials({
                ...loginCredentials,
                password: event.target.value,
              })
            }
          />
          <SubmitButton type="submit">Entrar</SubmitButton>
        </div>
      </form>
    </Container>
  );
}
