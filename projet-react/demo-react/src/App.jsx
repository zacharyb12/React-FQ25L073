import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import DemoComposant from './pages/demo/A.composant'
import Exo1 from './pages/exo/exo-1'

function App() {

  return ( 
    <Router>

      <Routes>
        {/* Demonstration */}
        <Route path="composant" element={<DemoComposant />} />

        {/* Exercices */}
        <Route path="exo-1" element={<Exo1 />} />
        
      </Routes>

    </Router>
  )
}



export default App
