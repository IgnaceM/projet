import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeText from './composants/HomeTexts';
import HeaderText from './composants/HeaderText';
import HomeAudio from './composants/HomeAudio';
import Setting from './composants/Setting';
import About from './composants/About';
import Livre1 from './pages/Livre1'
import Livre2 from './pages/Livre2'
import Livre3 from './pages/Livre3'
import Livre4 from './pages/Livre4'
import Livre5 from './pages/Livre5'
import Livre6 from './pages/Livre6'
import Livre7 from './pages/Livre7'
import Livre8 from './pages/Livre8'
import Livre9 from './pages/Livre9'
import Livre10 from './pages/Livre10'
import Livre11 from './pages/Livre11'
import Livre12 from './pages/Livre12'
import Livre13 from './pages/Livre13'
import Livre14 from './pages/Livre14'
import Livre15 from './pages/Livre15'
import Audio1 from './AudioComponsants/Audio1';
import Audio2 from './AudioComponsants/Audio2';
import Audio3 from './AudioComponsants/Audio3';
import Audio4 from './AudioComponsants/Audio4';
import Audio5 from './AudioComponsants/Audio5';
import Audio6 from './AudioComponsants/Audio6';
import Audio7 from './AudioComponsants/Audio7';
import Audio8 from './AudioComponsants/Audio8';

function App() {
  return (
    
    <>
    <Router>
      <Routes>
        {/* <Route path="/fr" element={<AppFr />} />
        <Route path="/en" element={<AppEn />} /> */}
        <Route path="*" element={<HomeText />} />
        <Route path="/homeAudio" element={<HomeAudio />} />
        <Route path="/about" element={<About />} />
        <Route path="/livre1" element={<Livre1 />} />
        <Route path="/livre2" element={<Livre2 />} />
        <Route path="/livre3" element={<Livre3 />} />
        <Route path="/livre4" element={<Livre4 />} />
        <Route path="/livre5" element={<Livre5 />} />
        <Route path="/livre6" element={<Livre6 />} />
        <Route path="/livre7" element={<Livre7 />} />
        <Route path="/livre8" element={<Livre8 />} />
        <Route path="/livre9" element={<Livre9 />} />
        <Route path="/livre10" element={<Livre10 />} />
        <Route path="/livre11" element={<Livre11 />} />
        <Route path="/livre12" element={<Livre12 />} />
        <Route path="/livre13" element={<Livre13 />} />
        <Route path="/livre14" element={<Livre14 />} />
        <Route path="/livre15" element={<Livre15 />} />
        <Route path="/audio1" element={<Audio1 />} />
        <Route path="/audio2" element={<Audio2 />} />
        <Route path="/audio3" element={<Audio3 />} />
        <Route path="/audio4" element={<Audio4 />} />
        <Route path="/audio5" element={<Audio5 />} />
        <Route path="/audio6" element={<Audio6 />} />
        <Route path="/audio7" element={<Audio7 />} />
        <Route path="/audio8" element={<Audio8 />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
