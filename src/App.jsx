import './App.css';
// import './butter';
import {Navbar, Hero, About, Projects, Contact, Footer} from './components';


const App = () =>{
  return (
    <>
      <div className='bg'/>
      <div id='butter' className='md:px-[96px] px-[18px] py-[18px] '>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
