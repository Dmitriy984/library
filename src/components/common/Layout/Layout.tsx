import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';



const Layout = () => {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Outlet/>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;