import { ReactElement, FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import NavBar from './components/navBar/NavBar';
import HomePage from './pages/home/HomePage';
import Footer from './components/footer/Footer';
import AboutPage from './pages/about/AboutPage';


const App:FC = ():ReactElement => {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage/> } />
          <Route path='/about' element={<AboutPage/> } />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
