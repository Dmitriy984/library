import type { IReader } from '../../../types/reader.types';
import ReaderCard from '../../components/readers/ReaderCard/ReaderCard';

interface ReaderCardProps {
  reader: IReader;
}

const ReaderCard = ({ reader }: ReaderCardProps) => {
  const { fullName, email, phone, activeBooks, registrationDate } = reader;
  const activeCount = activeBooks.length;

  return (
    <div className="reader-card">
      <div className="reader-card-header">
        <div className="reader-avatar">👤</div>
        <h3 className="reader-name">{fullName}</h3>
      </div>
      <div className="reader-card-body">
        <p className="reader-email">📧 {email}</p>
        <p className="reader-phone">📱 {phone}</p>
        <p className="reader-registration">
          Зарегистрирован: {new Date(registrationDate).toLocaleDateString('ru-RU')}
        </p>
        <div className="reader-stats">
          <span className="reader-stat">
            📖 Активных книг: <strong>{activeCount}</strong>
          </span>
        </div>
      </div>
      <div>
        <Link to={`/resders/${reader.id}`} className="btn btn-primary">Профиль</Link>
      </div>
    </div>
  );
};

export default ReaderCard;




























