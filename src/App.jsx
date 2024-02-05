import './App.css';
import Experience from './components/Experience/Experience';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Stack from './components/Stack/Stack';

function App() {

  return (
    <>
      <Navbar />
      <div className='container'>
        <Hero />
        <Stack />
        <Experience />
      </div>
    </>
  )
}

export default App
