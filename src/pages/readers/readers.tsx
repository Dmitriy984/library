import ReaderList from '../../components/readers/ReaderList/ReaderList';
import { mockReaders } from '../../mocks/readers';
import '../../styles/readers.css';
import AddReaderModal from '../../components/addReaderModal';
import { useState } from 'react';

const ReadersPage = () => {
  const [showModal, setShowModal] = useState(false);
  const clseHendler = () => {
    setShowModal(false);
  }
  return (
    
      <div className='page-header'>
      <div>
      <div className="page-content">
        <div>
        <h1 className="page-title">Читатели библиотеки</h1>
        <p className="page-subtitle">
          Всего читателей: <strong>{mockReaders.length}</strong>
        </p>
        </div>
        <button className='btn btn-primari' id='add-reader-btn' onClick={()=>setShowModal(true)}>
          + Добавить читателя
        </button>
        </div>
        <ReaderList readers={mockReaders} />
        {showModal && <AddReaderModal hendelClick={clseHendler}/>}
        </div>
        </div>
    
  );
};

export default ReadersPage;