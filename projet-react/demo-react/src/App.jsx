import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import DemoComposant from './pages/demo/A.composant'
import Exo1 from './pages/exo/exo-1'
import Homepage from './pages/homepage';
import Navbar from './components/navbar';
import DemoConditionnel from './pages/demo/B.conditionnel';
import DemoCollections from './pages/demo/C.collections';


function App() {

  return ( 
    <Router>

      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />

          {/* Demo Composant */}
          <Route path="/demo-composant" element={<DemoComposant />} />
          <Route path="/demo-conditionnel" element={<DemoConditionnel />} />
          <Route path="/demo-collections" element={<DemoCollections />} />

          {/* Exo */}
          <Route path="/exo1" element={<Exo1 />} />
      </Routes>

    </Router>
  )
}



export default App
