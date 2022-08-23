import "./assets/css/main.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

import LoginPage from './screens/authentication/LoginPage';
import HomePage from "./screens/HomePage";
import RegisterPage from "./screens/authentication/RegisterPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layouts/header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
