import ReactDOM from 'react-dom/client';
import './index.css';
import './styles.css';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import Computational from "./pages/Computational"
import Step from './pages/Step';
import Sword from './pages/Sword';
import Uml from './pages/Uml';
import NoPage from './pages/NoPage';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/frontend-react-router/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="computational" element={<Computational />} />
          <Route path="uml" element={<Uml />} />
          <Route path="Step" element={<Step/>} />
          <Route path="3sword" element={<Sword />} />
          <Route path="*" element={<NoPage />} />
      </Route>
      </Routes> 
    </BrowserRouter>
  );
}
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);