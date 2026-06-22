import type { IBook } from '../../../types/book.types';

interface BookCardProps {
  book: IBook;
}

const BookCard = ({ book }: BookCardProps) => {
  const { title, author, year, genre, isAvailable, description } = book;
  const statusClass = isAvailable ? 'badge-available' : 'badge-unavailable';
  const statusText = isAvailable ? 'Доступна' : 'Выдана';

  return (
    <div className="book-card">
      <div className="book-card-header">
        <h3 className="book-title">{title}</h3>
        <span className={`book-status ${statusClass}`}>{statusText}</span>
      </div>
      <div className="book-card-body">
        <p className="book-author">{author}</p>
        <p className="book-meta">{year} · {genre}</p>
        {description && <p className="book-description">{description}</p>}
      </div>
      <div className="book-card-footer">
        <button className="btn btn-primary">Подробнее</button>
      </div>
    </div>
  );
};

export default BookCard;