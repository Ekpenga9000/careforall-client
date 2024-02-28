import { ReactElement, FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import NavBar from './components/navBar/NavBar';
import HomePage from './pages/home/HomePage';
import Footer from './components/footer/Footer';
import AboutPage from './pages/about/AboutPage';
import ServicesPage from './pages/services/ServicesPage';
import EventsPage from './pages/events/EventsPage';
import CareersPage from './pages/careers/CareersPage';
import WaitList from './pages/waitlist/WaitList';


const App:FC = ():ReactElement => {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage/> } />
          <Route path='/about' element={<AboutPage/> } />
          <Route path='/services' element={<ServicesPage/> } />
          <Route path='/events' element={<EventsPage/> } />
          <Route path='/careers' element={<CareersPage/> } />
          <Route path='/waitlist' element={<WaitList/> } />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
