import { BrowserRouter, Routes, Route } from 'react-router-dom';

//pages & components
import Home from '../src/pages/Home'
import Sidebar from '../src/components/Sidebar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
