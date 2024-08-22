import './App.css';
import { Routes, Route } from 'react-router-dom';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/portfolio/' element={
          <>      
            <Header/>
            <Main/>
            <Footer/>
          </>
        } />
        <Route path='/business' element={
          <>      
            <Header/>
            <Main/>
            <Footer/>
          </>
        } />
        <Route path='/language' element={
          <>      
            <Header/>
            <Main/>
            <Footer/>
          </>
        } />
        <Route path='/aboutyou' element={
          <>      
            <Header/>
            <Main/>
            <Footer/>
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;



