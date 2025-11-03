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
import ExoFormUser from './pages/exo/exo-4';
import CalculatricePage from './pages/exo/exo-4.1';
import CommunicationPage from './pages/demo/F.communication';
import ContainerPage from './pages/exo/exo-5';
import HooksUseEffectPage from './pages/demo/G.hooks-useEffect';
import AjaxPage from './pages/demo/H.Ajax';


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
          <Route path="/demo-communication" element={<CommunicationPage />} />
          <Route path="/demo-useEffect" element={<HooksUseEffectPage />} />
          <Route path="/demo-ajax" element={<AjaxPage />} />

          {/* Exo */}
          <Route path="/exo1" element={<Exo1 />} />
          <Route path="/exo2" element={<ListProductsPage />} />
          <Route path="/exo3" element={<Compteur />} />
          <Route path="/exo4/form" element={<ExoFormUser />} />
          <Route path="/exo4.1/calculatrice" element={<CalculatricePage />} />
          <Route path="/exo5/todo" element={<ContainerPage />} />
      </Routes>

    </Router>
  )
}



export default App
