import {Routes, Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import  Home  from './components/Home';
import Mental from './components/Mental';
import Finance from './components/Finance';
import Professional from './components/Professional';
import Hobbies from './components/Hobbies';
import  Future  from './components/Future';
import Nutrition from './components/Nutrition';
import Footer from './components/Footer';
import { AppContextProvider } from './components/context/appContext';
// import {VideoList} from './components/context/VideoList';

function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <AppContextProvider>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/mental-health" element={<Mental />}/>
        <Route path="/pro-dev" element={<Professional />}/>
        <Route path="/Finances" element={<Finance />}/>
        <Route path="/Nutrition" element={<Nutrition />}/>
        <Route path="/hobbies" element={<Hobbies />}/>
        <Route path="/future-athletes" element={<Future />}/>
      </Routes>
      </AppContextProvider>
      <Footer/>
    </div>
  );
}

export default App;
