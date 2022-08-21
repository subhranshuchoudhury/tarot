import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import Layout from './pages/Layout';
import Result from './pages/Result';
import FortuneCard from './pages/FortuneCard';
import { useState } from 'react';

function App() {

  const [TarotResult, setTarotResult] = useState([]);

  // save the received prop data from fortune page.
  const setTarotData = (data) => {
    setTarotResult(data);
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="fortune" element={<FortuneCard receiveData={setTarotData} />} />
          <Route path="result" element={<Result chosenData={TarotResult} />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
