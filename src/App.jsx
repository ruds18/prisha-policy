import "./App.css";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <div>
        <Routes>
           <Route path="/" element={<Login/>}></Route>
           <Route path="/dashboard" element={<Dashboard/>}></Route>
        </Routes>
      </div>
     </BrowserRouter>
    </>
  );
}

export default App;
