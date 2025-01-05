import './App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../src/pages/home/Home';
import About from '../src/pages/about/About';
import Header from '../src/components/header/Header'
import Footer from './components/footer/Footer';
import Contact from './pages/contact/Contact';
import Iconscomponent from './components/icons-component/Iconscomponent';
import Faq from './pages/faqs/Faq';
import Blogs from './pages/blogs/Blogs';
import BasicAccordion from './components/accodian/Accodian';
import Error from './pages/404 error/Error';
import Causes from './pages/causes/Causes';
import Donate from './pages/donate/Donate';
import Popup from './components/popup/Popup';
import ScrollToTop from './ScrollToTop';




function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
      <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/faq" element={<Faq />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="/accodian" element={<BasicAccordion />}></Route>
          <Route path="/error" element={<Error />}></Route>
          <Route path="/causes" element={<Causes />}></Route>
          <Route path="/donate" element={<Donate />}></Route>
          <Route path="/popup" element={<Popup />}></Route>
        </Routes>
        <Iconscomponent/>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
