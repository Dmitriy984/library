import Footer from "../../components/common/footer"
import './books.css'
import { useParams } from "react-router-dom";
import { mockReaders } from "../../mocks/readers";
import NotFoundPage from "../../components/common/page404";

const ReadersPage = () => {
  const { id } = useParams();
  const reader = mockReaders.find((reader)=>{return(reader.id === id)});
  


  if (!reader){
    return(
  <NotFoundPage />
    )
  }



    return(
<div className="page-wrapper">
    <header />
    {/* <!-- ========== MAIN ========== --> */}
    <main className="main-content">
      <div className="container">
        <h1 className="page-title">Каталог книг</h1>
        <p className="page-subtitle">
          Всего книг: <strong>10</strong>
        </p>

        {/* <!-- Toolbar --> */}
        <div className="page-toolbar">
          <div className="book-search">
            {/* <input  */}
              type="text" 
              className="book-search-input" 
              placeholder="🔍 Поиск по названию или автору..."
            {/* > */}
            <button className="book-search-clear">✕</button>
          </div>
          <span className="search-result-count">Найдено: 10</span>
        </div>

        {/* <!-- Book Grid --> */}
        <div className="card-grid">
          {/* <!-- Book Card 1 --> */}
          <article className="book-card">
            <div className="book-cover">
              <div className="book-cover-placeholder">
                <span className="book-cover-emoji">📖</span>
              </div>
              <span className="book-status-badge badge badge-unavailable">Выдана</span>
            </div>
            <div className="book-content">
              <h3 className="book-title">Мастер и Маргарита</h3>
              <p className="book-author">Михаил Булгаков</p>
              <div className="book-meta">
                <span className="book-year">1967</span>
                <span className="book-genre">Роман</span>
              </div>
              <p className="book-description">
                Мистический роман о дьяволе, посетившем Москву в 1930-х годах.
              </p>
              <button className="btn btn-primary btn-block">Подробнее</button>
            </div>
          </article>

          {/* <!-- Book Card 2 --> */}
          <article className="book-card">
            <div className="book-cover">
              <div className="book-cover-placeholder">
                <span className="book-cover-emoji">📖</span>
              </div>
              <span className="book-status-badge badge badge-available">Доступна</span>
            </div>
            <div className="book-content">
              <h3 className="book-title">Война и мир</h3>
              <p className="book-author">Лев Толстой</p>
              <div className="book-meta">
                <span className="book-year">1869</span>
                <span className="book-genre">Эпопея</span>
              </div>
              <p className="book-description">
                Масштабное произведение о русском обществе в эпоху наполеоновских войн.
              </p>
              <button className="btn btn-primary btn-block">Подробнее</button>
            </div>
          </article>

          {/* <!-- Book Card 3 --> */}
          <article className="book-card">
            <div className="book-cover">
              <div className="book-cover-placeholder">
                <span className="book-cover-emoji">📖</span>
              </div>
              <span className="book-status-badge badge badge-available">Доступна</span>
            </div>
            <div className="book-content">
              <h3 className="book-title">Преступление и наказание</h3>
              <p className="book-author">Фёдор Достоевский</p>
              <div className="book-meta">
                <span className="book-year">1866</span>
                <span className="book-genre">Роман</span>
              </div>
              <p className="book-description">
                Психологический роман о студенте Раскольникове и его теории.
              </p>
              <button className="btn btn-primary btn-block">Подробнее</button>
            </div>
          </article>

          {/* <!-- Book Card 4 --> */}
          <article className="book-card">
            <div className="book-cover">
              <div className="book-cover-placeholder">
                <span className="book-cover-emoji">📖</span>
              </div>
              <span className="book-status-badge badge badge-unavailable">Выдана</span>
            </div>
            <div className="book-content">
              <h3 className="book-title">Евгений Онегин</h3>
              <p className="book-author">Александр Пушкин</p>
              <div className="book-meta">
                <span className="book-year">1833</span>
                <span className="book-genre">Роман в стихах</span>
              </div>
              <p className="book-description">
                История о разочарованном дворянине и трагической любви.
              </p>
              <button className="btn btn-primary btn-block">Подробнее</button>
            </div>
          </article>
{/*       <!-- Book Card 5 --> */}
          <article className="book-card">
            <div className="book-cover">
              <div className="book-cover-placeholder">
                <span className="book-cover-emoji">📖</span>
              </div>
              <span className="book-status-badge badge badge-available">Доступна</span>
            </div>
            <div className="book-content">
              <h3 className="book-title">1984</h3>
              <p className="book-author">Джордж Оруэлл</p>
              <div className="book-meta">
                <span className="book-year">1949</span>
                <span className="book-genre">Антиутопия</span>
              </div>
              <p className="book-description">
                Роман о тоталитарном обществе и Большом Брате.
              </p>
              <button className="btn btn-primary btn-block">Подробнее</button>
            </div>
          </article>

          {/* <!-- Book Card 6 --> */}
          <article className="book-card">
            <div className="book-cover">
              <div className="book-cover-placeholder">
                <span className="book-cover-emoji">📖</span>
              </div>
              <span className="book-status-badge badge badge-available">Доступна</span>
            </div>
            <div className="book-content">
              <h3 className="book-title">Маленький принц</h3>
              <p className="book-author">Антуан де Сент-Экзюпери</p>
              <div className="book-meta">
                <span className="book-year">1943</span>
                <span className="book-genre">Сказка</span>
              </div>
              <p className="book-description">
                Философская сказка о дружбе, любви и ответственности.
              </p>
              <button className="btn btn-primary btn-block">Подробнее</button>
            </div>
          </article>
        </div>
      </div>
    </main>

    {/* <!-- ========== FOOTER ========== --> */}
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div>© 2026 Библиотека. Все права защищены.</div>
          <div className="footer-contacts">
            <span>📞 +7 (999) 123-45-67</span>
            <span>✉️ library@mail.ru</span>
          </div>
        </div>
      </div>
    </footer>
  </div>
    )
}

export default ReadersPage