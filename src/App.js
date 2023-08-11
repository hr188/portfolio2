import React  from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Project from './components/Project';


import './styles/app.scss';
import './styles/header.scss';
import './styles/home.scss'
import './styles/footer.scss'
import './styles/contact.scss'
import Footer from './components/Footer';
import Contact from './components/Contact';



function App() {
  return (
    <>
    <Header/>
    <Home/>
    <Project/>
    
    <Contact/>
    <Footer/>
    {/*<Toaster position='top-right' />*/}
    
    </>
  );
}

export default App;
