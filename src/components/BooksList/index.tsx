import { useState } from "react";
import { GlobalStyle } from "../../styles/global";
import { BooksModal } from "../BooksModal";
import { Header } from "../Header";
import {
  BookInfo,
  Card,
  CardDescription,
  CardTitle,
  Container,
  Content,
  Footer,
} from "./styles";

interface BooksListProps {
  books: Array<Book>;
}

export interface Book {
  id: string;
  title: string;
  authors?: Array<String>;
  imageUrl: string;
  pageCount: number;
  publisher: string;
  published: number;
  language: string;
  isbn10: string;
  isbn13: string;
  description: string;
}

export function BooksList({ books }: BooksListProps) {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book>({} as Book);

  function handleOpenBookModal(book: Book) {
    setIsBookModalOpen(true);

    setSelectedBook(book);
  }

  function handleCloseBookModal() {
    setIsBookModalOpen(false);
  }

  return (
    <>
      <BooksModal
        isOpen={isBookModalOpen}
        onRequestClose={handleCloseBookModal}
        book={selectedBook}
      />
      <Container>
        <Header />
        <Content>
          {books.map((book: Book) => (
            <Card onClick={() => handleOpenBookModal(book)}>
              <img src={book.imageUrl} alt="" />
              <CardDescription>
                <CardTitle>
                  <span>{book.title}</span>
                  <span className="author">Ota Neto</span>
                </CardTitle>
                <BookInfo>
                  <span>{book.pageCount} páginas</span>
                  <span>Editora {book.publisher}</span>
                  <span>Publicado em {book.published}</span>
                </BookInfo>
              </CardDescription>
            </Card>
          ))}
        </Content>
        <Footer>
          <span>Página 1 de 100</span>
          <button>
            <img src="./assets/prev.svg" alt="" />
          </button>
          <button>
            <img src="./assets/next.svg" alt="" />
          </button>
        </Footer>
      </Container>
      <GlobalStyle />
    </>
  );
}
