import { useContext, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ThemeContext } from './contexts/theme';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import ScrollToTop from './contexts/ScrollToTop';
import Footer from './components/Footer/Footer';
import './App.css'

//Project Example 


function App() {
  const themeContext = useContext(ThemeContext);
  const themeName = themeContext?.themeName || '';
  return (
    <Router>
      <div id='top' className={`${themeName} app`}>
        <Header />

        <main>
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <ScrollToTop />
        <Footer />
      </div>
    </Router>
  )
}

export default App;
