import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Overview from './Components/Overview/Overview';
import Highlight from './Components/Highlights/Highlight';
import AboutUs from './Components/AboutUs/AboutUs';
import Qualification from './Components/Qualification/Qualification';

function App() {
  return (
    <div className="App">
      
      <Navbar/> 
      <Home/>
      <AboutUs/>
      <Overview/>
      <Highlight/>
      <Qualification/>
      <Footer/>      
    </div>
  );
}

export default App;
