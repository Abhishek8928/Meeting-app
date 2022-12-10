
import './App.css';

import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home/Home';
import Addmeeting from './pages/Addmeeting/Addmeeting';
import Notfound from './pages/Notfound/Notfound';
import Meeting from './pages/Important/Meeting';
import logo from './images/logo.svg'
function App() {
  return (
    <>
      
      <div className="banner">
      <p>StudyStream web app is now in public beta! 🚀</p>

      </div>
      <div className="container">
      <nav>
          <img src={logo}  className="nav-logo" />
          
        <ul className="nav-wrapper">
          <li><Link  className='nav-item' to='/'>Home</Link></li>
          <li><Link className='nav-item' to='/Meeting'>Meeting</Link></li>
          <li><Link className='nav-item' to='/Addmeet'>AddMeeting</Link></li>
        </ul>
        </nav>
        
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Addmeet' element={<Addmeeting />} />
        <Route path='/Meeting' element={<Meeting />} />
        <Route path='*' element={<Notfound />} />
        
        </Routes>
        </div>

        
    </>
  );
}

export default App;
