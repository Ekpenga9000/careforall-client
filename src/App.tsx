import { ReactElement, FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import NavBar from './components/navBar/NavBar';
import HomePage from './pages/home/HomePage';
import Footer from './components/footer/Footer';

const App:FC = ():ReactElement => {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage/> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
