
import './App.css';

import Header from './components/Header';
import Body from './components/Body';
import RestoCard from './components/RestoCard';







const AppLayout = () => {
  return (
    <div className='app'>
      <Header />
      <Body />
      <RestoCard />
    </div>

  )
}

export default AppLayout;
