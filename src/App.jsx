import './App.css';
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
      </div>
    </>
  )
}

export default App
