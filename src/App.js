import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Categories from "./components/Categories";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ProductsPage from "./components/ProductsPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from "./components/Cart";
import Profile from "./components/Profile";
import { useEffect, useMemo, useState } from "react";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import api from "./api";
import UserContext from "./context/UserContext";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    api.get('/users/profile')
    .then((res) => {
      setUser(res.data);
    })
    .catch((e) => {
      //noop
    }) 
  }, []);

  return (
   <div className="App">
    <UserContext.Provider value={useMemo(() => ({user, setUser}), [user])}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/profile" 
            element={
              user ? (
                <Profile />
              ) : (
                <Navigate replace to="/signin" />
              )
            }
          />
          <Route path="/signin" element={<SignIn />} /> 
          <Route path="/signup" element={<SignUp />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </UserContext.Provider>
   </div>
  );
};

export default App;
