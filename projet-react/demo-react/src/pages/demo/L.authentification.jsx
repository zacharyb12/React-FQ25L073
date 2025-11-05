

function Authentification() {
  return (
    <>
      <h1>Authentification Page</h1>

          <div className="card w-75 mt-3 p-1 text-center bg-primary">
              <div className="card p-1 bg-white">
                <p>L'utilisateur soumet ses informations de connexion via un formulaire.</p>
                <p>Le service d'authentification envoie une requête à l'API avec les informations de l'utilisateur.</p>
                <p>Si les informations sont valides, l'API renvoie un token d'authentification.</p>
                <p>Le service stocke ce token (par exemple, dans le localStorage).</p>
                <p>Le contexte d'authentification met à jour l'état pour refléter que l'utilisateur est connecté.</p>
                <p>Les composants protégés vérifient l'état d'authentification avant de permettre l'accès.</p>
                <p>L'API intercepte les requêtes sortantes pour ajouter le token d'authentification dans les en-têtes.</p>
              </div>
          </div> 

                    <div className="card w-75 mt-3 p-1 text-center bg-primary">
              <div className="card p-1 bg-white">
                <p>Pour decoder le token nous utiliserons la bibliothèque jwt-decode.</p>
                <pre>{`npm install jwt-decode`}</pre>
              </div>
          </div>

          <div className="card w-75 mt-3 p-1 text-center bg-primary">
              <div className="card p-1 bg-white">
                  <h3>Le dossier api a pour role de gérer les appels à l'API et d'intercepter les requêtes pour ajouter le token d'authentification.</h3>
              </div>
          </div>

          <div className="card w-75 mt-3 p-1 text-center bg-secondary">
              <div className="card p-1 bg-white">
                <p>Implementation du dossier api</p>
                <p>Ce dossier permet sert a implementer des intercepteurs pour les requêtes HTTP.</p>
                <p>Ici la validité du token est vérifiée avant chaque requête.</p>
                <p>Si le token est invalide, une erreur est levée et l'utilisateur est redirigé vers la page de connexion.</p>
              </div>
              <div className="card p-1 mt-1 bg-white">
                <pre>{`
                import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

// Action lié au token
const isTokenValid = (token)=> {
if (!token) {
    return false;
}
try {
    const payload = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    return payload.exp > currentTime;

} catch (error) {
    console.warn("Token invalide : ", error);
    return false;
}
}

const cleanToken = () => {
localStorage.removeItem('token');
}

// Intercepteur de requêtes
const apiClient = axios.create({
    baseURL : 'http://localhost:8080/api',
    headers : {
        'Content-Type': 'application/json'
    }
})

// intercepteur de requêtes
apiClient.interceptors.request.use((request) => {

    const token = localStorage.getItem('token');

    // Ajouter le token dans l'entête Authorization si il est valide
    if(token) {
        if(isTokenValid(token)) {
            request.headers.Authorization = \`Bearer \${token}\`;
        }else {
            // Token invalide, on le nettoie et on redirige vers la page de login
            cleanToken();
           window.location.href = '/login';
            return Promise.reject(new Error('Token expiré'));
        }
    }
    return request;
}, 
(error) => {
    return Promise.reject(error);
});

// interceptor de réponses
apiClient.interceptors.response.use(
    (response) => response,
    (error) => {

        cleanToken();
        window.location.href = '/login';
        return Promise.reject(error);
    }
)

export default apiClient;
                `}</pre>
              </div>
            </div>

          <div className="card w-75 mt-3 p-1 text-center bg-primary">
              <div className="card p-1 bg-white">
                  <h3>Le dossier service a pour rôle de gérer la logique métier et les appels aux API.</h3>
              </div>
          </div>
            <div className="card w-75 mt-3 p-1 text-center bg-secondary">
              <div className="card p-1 bg-white">
                 <p>Implementation du service d'authentification</p>
              </div>
              <div className="card p-1 mt-1 bg-white">
                <pre>{`
                import apiClient from "../api/apiClient";

export const authService = {

  login: async (email, password) => {

    const res = await apiClient.post("/auth/login", { email, password });

    const { token, user } = res.data;

    // stocker le token
    localStorage.setItem("token", token);

    return user;
  },

  register: async (email, password) => {

    const res = await apiClient.post("/auth/register", { email, password });

    const { token, user } = res.data;

    // stocker le token
    localStorage.setItem("token", token);

    return user;
  },

  logout: () => {

    localStorage.removeItem("token");
    
  },

  getToken: () => localStorage.getItem("token"),
};
                `}</pre>
              </div>
            </div>


          <div className="card w-75 mt-3 p-1 text-center bg-primary">
              <div className="card p-1 bg-white">
                  <h3>Le context a pour but de partager l'état d'authentification dans toute l'application.</h3>
              </div>
          </div>
            <div className="card w-75 mt-3 p-1 text-center bg-secondary">
              <div className="card p-1 bg-white">
                 <p>Implementation du contexte d'authentification</p>
              </div>
              <div className="card p-1 mt-1 bg-white">
                <pre>{`import React, { createContext, useContext, useState } from "react";

import { authService } from "../services/authService";

// Création du contexte d'authentification pour pouvoir partager l'état d'authentification dans toute l'application
const AuthContext = createContext();

// Fournisseur du contexte d'authentification
export const AuthProvider = ({ children }) => {
    // état utilisateur 
  const [user, setUser] = useState(null);

// fonction de connexion appelant le service d'authentification
  const login = async (email, password) => {
    const user = await authService.login(email, password);
    // Met à jour l'état utilisateur
    setUser(user);
  };

// fonction de déconnexion appelant le service d'authentification
  const logout = () => {
    authService.logout();
    // Réinitialise l'état utilisateur
    setUser(null);
  };

// Fournit le contexte avec l'état utilisateur et les fonctions de connexion/déconnexion
  return (
    // Fournisseur du contexte d'authentification avec les valeurs user, login et logout
    <AuthContext.Provider value={{ user, login, logout }}>
      {/*les enfants auront accès à ces valeurs via le contexte*/}
      {children}
    </AuthContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte d'authentification
export const useAuth = () => {
// Utilise le contexte d'authentification
  return useContext(AuthContext);
};`}</pre>
              </div>
            </div>

        <div className="card w-75 mt-3 p-1 text-center bg-primary">
              <div className="card p-1 bg-white">
                  <h3>La gestion des routes sera assurée par un composant qui verifie une information avant d'autoriser l'accès.</h3>
              </div>
          </div>

            <div className="card w-75 mt-3 p-1 text-center bg-secondary">
              <div className="card p-1 bg-white">
                 <p>Implementation de l'acces au routes</p>
              </div>
              <div className="card p-1 mt-1 bg-white">
                <pre>{`import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";


export default function PrivateRoute({ children }) {

    // recupère l'utilisateur depuis le contexte
  const { user } = useAuth();
  
  // instance pour la navigation
  const navigate = useNavigate();

  // si pas d'utilisateur connecté
  if (!user) {
    // pas connecté → redirige vers /login
    navigate("/login");
  }

  // si connecté, rend les enfants ( page )
  return children;
}`}</pre>
              </div>
            </div>


        <div className="card w-75 mt-3 p-1 text-center bg-primary">
              <div className="card p-1 bg-white">
                  <h3>La gestion des routes sera définie par le composant qui vérifie une information avant d'autoriser l'accès.</h3>
              </div>
          </div>
                        <div className="card w-75 mt-3 p-1 text-center bg-secondary">
              <div className="card p-1 bg-white">
                 <p>Implementation de l'acces au routes</p>
              </div>
              <div className="card p-1 mt-1 bg-white">
                <pre>{`import { AuthProvider } from './context/authContext'
import PrivateRoute from './routesAccess/routesPrivate'


function App() {



  return (
    <>
    <div>
          <AuthProvider>
                <Router>
                    <Navbar />
                    <Routes>
                    <Route path='/' element={<Homepage />} />
                    <Route path='/login' element={<LoginForm />} />

                    <Route path='/protected' element={
                                                        <PrivateRoute>
                                                        <ProtectedPage />
                                                        </PrivateRoute>
                                                    } />
                    </Routes>
                </Router>
          </AuthProvider>
    </div>

    </>
  )
}


export default App`}</pre>
              </div>
            </div>

    </>
  );
}

export default Authentification;