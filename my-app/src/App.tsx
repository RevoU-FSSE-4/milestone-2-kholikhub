import './App.css';
import {Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import PokemonEvolution from "./Page/PokemonEvolution";
import Register from "./Page/Register";
import FormLogin from "./Page/FormLogin";
import Dashboard from "./Page/Dashboard";
import PrivateRoute from "./Route/PrivateRoute";





function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path="/Register" element={<Register />}></Route>
      <Route path="/FormLogin" element={<FormLogin/>}></Route>

      <Route path="/" element={<PrivateRoute/>}>
        <Route path="/Dashboard" element={<Dashboard/>}></Route>
        <Route path="/pokemon-detail/:id" element={<PokemonEvolution />}></Route>
      </Route>
    </Routes>
  );
}

export default App;