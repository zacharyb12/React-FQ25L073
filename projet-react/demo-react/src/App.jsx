import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import DemoComposant from './pages/demo/A.composant'
import Exo1 from './pages/exo/exo-1'
import Homepage from './pages/homepage';
import Navbar from './components/navbar';
import DemoConditionnel from './pages/demo/B.conditionnel';
import DemoCollections from './pages/demo/C.collections';
import ListProductsPage from './pages/exo/exo-2';
import EvenementsPage from './pages/demo/D.evenements';
import Compteur from './pages/exo/exo-3';
import FormulairesPages from './pages/demo/E.Formulaires';


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
          <Route path="/demo-evenements" element={<EvenementsPage />} />
          <Route path="/demo-formulaires" element={<FormulairesPages />} />

          {/* Exo */}
          <Route path="/exo1" element={<Exo1 />} />
          <Route path="/exo2" element={<ListProductsPage />} />
          <Route path="/exo3" element={<Compteur />} />
      </Routes>

    </Router>
  )
}



export default App
