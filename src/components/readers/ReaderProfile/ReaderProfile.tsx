import type { IReader } from '../../../types/reader.types';

interface ReaderProfileProps {
  reader: IReader;
}

const ReaderProfile = ({ reader }: ReaderProfileProps) => {
  const { fullName, email, phone, registrationDate, booksHistory, activeBooks } = reader;

  return (
    <div className="profile-wrapper">
      <div className="profile-header">
        <div className="profile-avatar">👤</div>
        <div className="profile-info">
          <h1 className="profile-name">{fullName}</h1>
          <p className="profile-email">📧 {email}</p>
          <p className="profile-phone">📱 {phone}</p>
          <p className="profile-registration">
            Зарегистрирован: {new Date(registrationDate).toLocaleDateString('ru-RU')}
          </p>
        </div>
      </div>

      <div className="profile-stats">
        <div className="stat-item">
          <span className="stat-value">{activeBooks.length}</span>
          <span className="stat-label"> Книг на руках</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">{booksHistory.length}</span>
          <span className="stat-label"> Всего прочитано</span>
        </div>
      </div>

      {activeBooks.length > 0 && (
        <div className="profile-active-books">
          <h3> Активные книги</h3>
          <ul>
            {activeBooks.map((bookId) => (
              <li key={bookId}>Книга #{bookId}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="profile-history">
        <h3> История чтения</h3>
        <ul>
          {booksHistory.map((history, index) => (
            <li key={index}>
              Книга #{history.bookId}
              {history.returnedAt ? (
                <span className="history-returned">
                  ( возвращена {new Date(history.returnedAt).toLocaleDateString('ru-RU')})
                </span>
              ) : (
                <span className="history-active">( на руках)</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ReaderProfile;