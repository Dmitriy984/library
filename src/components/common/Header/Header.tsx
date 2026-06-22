const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <span className="logo-icon">📚</span>
          <span className="logo-text">Библиотека</span>
        </div>
        <nav className="nav">
          <a href="#" className="nav-link active">Книги</a>
          <a href="#" className="nav-link">Читатели</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;