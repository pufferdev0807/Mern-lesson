import "./assets/css/main.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import LoginPage from './screens/authentication/LoginPage';
import HomePage from "./screens/HomePage";
import RegisterPage from "./screens/authentication/RegisterPage";
import { BrowserRouter, Routes, Route, useRoutes, Navigate } from "react-router-dom";
import Header from "./components/layouts/header";
import { useAuth } from "./config/AuthProvider";

function App() {
  // const routes = useRoutes([
  //   {
  //     path: "/",
  //     element: <HomePage/>
  //   },
  //   {
  //     path: "/login",
  //     element: <LoginPage/>
  //   },
  //   {
  //     path: "/register",
  //     element: <RegisterPage/>
  //   }
  // ]);

    const ProtectedRoute = ({children}) => {
      const {user} = useAuth();

      if(!user) {
        return <Navigate to="/"/>;
      }
      return children;
    }
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={
            <ProtectedRoute>
              <HomePage/>
            </ProtectedRoute>
          }/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
