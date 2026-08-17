
import './App.css'
import Navbar from './navbar.jsx'
import Course from './course.jsx'
import Footer from './footer.jsx'
import html from './assets/html.jpg'
import css from './assets/css.jpg'
import javascript from './assets/javascript.jpg'


function App() {
  return (
    <>
    

    <Course name="HTML" price="$199" img={html} show={true}/> 

    <Course name="CSS" price="$199" img={css} show={true}/>
    
    <Course name="Javascript" price="$299" img={javascript} show={true}/>

    
    </>
  )

}

export default App
