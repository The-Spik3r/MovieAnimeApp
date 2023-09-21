import Home from './home'
import Reproductor from './components/reproductor';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reproductor" element={<Reproductor />} />

      </Routes>
  )
}

export default App
