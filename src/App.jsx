import React ,{ useState} from 'react';
import Navbar from "./Navbar"
import Home from "./Home"
import About from "./About"
import Partners from "./Partners"
import Products from "./Products"
import Footer from './Footer';
import Login from './Login';



function App() {
  
  const [selectedComponent, setSelectedComponent] = useState('Home');

  return (
    <div>
         <Navbar  selectedComponent={selectedComponent} setSelectedComponent={setSelectedComponent}/>
         <div>
         {selectedComponent === 'Home' && <Home />}
         {selectedComponent === 'About' && <About />}
         {selectedComponent === 'Products' && <Products />}
         {selectedComponent === 'Brands' && <Partners />}
         </div>
      
         <Footer></Footer>
       </div>
  )
}

export default App
