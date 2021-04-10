import { useEffect, useState } from "react";
import { api } from "../../services/api";
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

export interface Book {
  id: string;
  title: string;
  authors: Array<string>;
  imageUrl: string;
  pageCount: number;
  publisher: string;
  published: number;
  language: string;
  isbn10: string;
  isbn13: string;
  description: string;
}

export default function BooksList() {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [books, setBooks] = useState<Book[]>([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);

  useEffect(() => {
    // const storageLastPage = localStorage.getItem("@MczBooks:page");

    // let lastPage = page;
    // if (!!storageLastPage) {
    //   lastPage = Number(storageLastPage);
    //   setPage(lastPage);
    // }

    api.get(`/books?page=${page}`).then((response) => {
      const { data, totalPages } = response.data;

      setBooks(data);
      setPages(totalPages);
    });
  }, [page]);

  function nextPage() {
    if (page < pages) {
      setPage(page + 1);
      saveLastPage();
    }
  }

  function previousPage() {
    if (page === 1) {
      return;
    }
    setPage(page - 1);
    saveLastPage();
  }

  function handleOpenBookModal(book: Book) {
    setIsBookModalOpen(true);

    setSelectedBook(book);
  }

  function handleCloseBookModal() {
    setIsBookModalOpen(false);
    setSelectedBook(null);
  }

  function saveLastPage() {
    localStorage.setItem("@MczBooks:page", page.toString());
  }

  return (
    <>
      <Container>
        <BooksModal
          isOpen={isBookModalOpen}
          onRequestClose={handleCloseBookModal}
          book={selectedBook}
        />
        <Header />
        <Content>
          {books.map((book: Book) => (
            <Card onClick={() => handleOpenBookModal(book)} key={book.id}>
              <img src={book.imageUrl} alt="" />
              <CardDescription>
                <CardTitle>
                  <span>{book.title}</span>

                  <span className="author">{book.authors.join(", ")}</span>
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
          <span>
            Página {page} de {pages}
          </span>
          <button onClick={previousPage}>
            <img src="./assets/prev.svg" alt="" />
          </button>
          <button onClick={nextPage}>
            <img src="./assets/next.svg" alt="" />
          </button>
        </Footer>
      </Container>
      <GlobalStyle />
    </>
  );
}
