import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";

const App = () => {
  const user=useSelector((state)=>state.user.currentUser);
  return(
  <Router>
    <Routes>
    <Route path="/" element={<Home />} />
      <Route path = "/products/find/:id" element={<Product/>}/>
      <Route path = "/products/:category"element={<ProductList/>}/>
      <Route path = "/cart" element={<Cart/>}/>
      {user ? (
          <Route path="/login" element={<Navigate to="/" />} />
        ) : (
          <Route path="/login" element={<Login />} />
        )}
        {user ? (
          <Route path="/register" element={<Navigate to="/" />} />
        ) : (
          <Route path="/register" element={<Register />} />
        )}
    </Routes>
  </Router>
  );
};

export default App;