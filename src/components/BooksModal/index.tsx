import Modal from "react-modal";
import { Book } from "../BooksList";
import { Container, Description, DescriptionHeader } from "./styles";

interface BooksModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  book: Book;
}

export function BooksModal({ isOpen, onRequestClose, book }: BooksModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <img src={book.imageUrl} alt="" />
        <Description>
          <DescriptionHeader>
            <span>{book.title}</span>
            <p>Tim Crown, Julie Zhuo, Fried Maximiilian</p>
          </DescriptionHeader>
          <div>
            <span>INFORMAÇÕES</span>
            <ul>
              <li>Páginas</li>
              <li>Editora</li>
              <li>Publicações</li>
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

            <div>
              <strong>RESENHA DA EDITORA</strong>
              <p>{book.description}</p>
            </div>
          </div>
        </Description>
      </Container>
    </Modal>
  );
}
