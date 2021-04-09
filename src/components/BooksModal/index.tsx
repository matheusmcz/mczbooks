import Modal from "react-modal";
import { GlobalStyle } from "../../styles/global";
import { Book } from "../BooksList";
import {
  Container,
  Description,
  DescriptionHeader,
  Informations,
  Resume,
} from "./styles";

interface BooksModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  book: Book | null;
}

export function BooksModal({ isOpen, onRequestClose, book }: BooksModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      shouldFocusAfterRender={false}
    >
      <button onClick={onRequestClose} className="react-modal-close">
        <img src="./assets/close.svg" alt="" />
      </button>
      {book && (
        <Container>
          <img src={book.imageUrl} alt="" />
          <Description>
            <DescriptionHeader>
              <span>{book.title}</span>
              <p>{book.authors.join(", ")}</p>
            </DescriptionHeader>
            <strong>INFORMAÇÕES</strong>
            <Informations>
              <ul>
                <li>Páginas</li>
                <li>Editora</li>
                <li>Publicação</li>
                <li>Idioma</li>
                <li>Título Original</li>
                <li>ISBN-10</li>
                <li>ISBN-13</li>
              </ul>
              <ul>
                <li>{book.pageCount}</li>
                <li>{book.publisher}</li>
                <li>{book.published}</li>
                <li>{book.language}</li>
                <li>{book.title}</li>
                <li>{book.isbn10}</li>
                <li>{book.isbn13}</li>
              </ul>
            </Informations>

            <strong className="resume">RESENHA DA EDITORA</strong>
            <Resume>
              <p>
                <img src="./assets/quotes.svg" alt="" /> {book.description}
              </p>
            </Resume>
          </Description>
        </Container>
      )}
      <GlobalStyle />
    </Modal>
  );
}
