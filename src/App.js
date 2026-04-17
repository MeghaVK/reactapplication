
import './App.css';

import Header from './components/Header';
import Body from './components/Body';
import RestoCard from './components/RestoCard';
import Footer from './components/footer';







const AppLayout = () => {
  return (
    <div className='app'>
      <Header />
      <Body />
      <RestoCard />
      <Footer />
    </div>

  )
}

export default AppLayout;
