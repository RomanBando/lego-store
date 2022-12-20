import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Categories from "./components/Categories";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import ProductsPage from "./components/ProductsPage";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
   <div className="App">
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </Router>
   </div>
  );
}

export default App;
