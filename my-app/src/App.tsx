import './App.css';
import {Route, Routes } from "react-router-dom";
import HeaderComponent from "./Component/HeaderComponent";


function App() {
  return (
    <Routes>
      <Route path='/' element={<HeaderComponent />}></Route>
    </Routes>
  );
}

export default App;
