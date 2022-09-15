import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Inbox from './pages/inbox/Inbox';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route path="/" >
                  <Route index element={<Home />} />
                  <Route path='inbox' element={<Inbox />} />
              </Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
