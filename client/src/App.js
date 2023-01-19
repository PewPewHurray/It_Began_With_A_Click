import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "./views/Main";
import Location from "./views/Location";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route element={<Main/>} path="/"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
