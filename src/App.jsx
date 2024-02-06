import './App.css';
import ContactMe from './components/ContactMe/ContactMe';
import Experience from './components/Experience/Experience';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Stack from './components/Stack/Stack';
import Projects from './components/Projects/Projects';

function App() {

  return (
    <>
      <Navbar />
      <div className='container'>
        <Hero />
        <Stack />
        <Experience />
        <Projects />
        <ContactMe />
      </div>
    </>
  )
}

export default App
