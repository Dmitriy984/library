import { useState } from 'react';
import Layout from '../../components/common/Layout/Layout';
import BookList from '../../components/books/BookList/BookList';
import BookSearch from '../../components/books/BookSearch/BookSearch';
import { mockBooks } from '../../mocks/books';
import '../../styles/books.css';

const BooksPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBooks = mockBooks.filter(book => {
    const query = searchQuery.toLowerCase();
    return (
      book.title.toLowerCase().includes(query) ||
      book.author.toLowerCase().includes(query)
    );
  });

  return (
    <Layout>
      <div className="page-content">
        <h1 className="page-title">Каталог книг</h1>
        <p className="page-subtitle">
          Всего книг: <strong>{mockBooks.length}</strong>
        </p>
        <div className="page-toolbar">
          <BookSearch onSearch={setSearchQuery} />
          {searchQuery && (
            <span className="search-result-count">
              Найдено: {filteredBooks.length}
            </span>
          )}
        </div>
        <BookList books={filteredBooks} />
      </div>
    </Layout>
  );
};

export default BooksPage;