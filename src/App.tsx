import Modal from "react-modal";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/auth";
import Routes from "./routes";
import { GlobalStyle } from "./styles/global";

Modal.setAppElement("#root");

export function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes />
      </AuthProvider>
      <GlobalStyle />
    </BrowserRouter>
  );
}
