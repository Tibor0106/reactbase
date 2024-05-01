import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
  
     <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={null} />
        </Routes>
      </BrowserRouter>
     </>
  );
}

export default App;
