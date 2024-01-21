import { ReactElement, FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import NavBar from './components/navBar/NavBar';
import TextComp from './components/TextComp';

const App:FC = ():ReactElement => {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <TextComp/>
      </BrowserRouter>
    </>
  )
}

export default App
