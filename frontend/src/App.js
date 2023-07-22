import "./App.css";
import EntryPage from "./pages/EntryPage";
import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom";
import Signup from "./pages/user/signup";
import Login from "./pages/user/login";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminForm from "./pages/admin/AdminForm";
import Home from "./pages/user/Home";
import Cart from "./pages/user/Cart";
import Payement from "./pages/user/Payement";
import History from "./pages/user/History";
import { useContext } from "react";
import CartContext from "./store/CartContext";

function App() {

 const ctx=useContext(CartContext);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EntryPage />} />
          <Route path="/userSignup" element={<Signup />} />
          <Route path="/userLogin" element={<Login />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/adminForm" element={<AdminForm />} />
        { ctx.email && <Route path="/home" element={<Home />} />}
          {!ctx.email &&  <Route path="/home" element={ <Navigate to="/userlogin" /> } />}
          <Route path="/cart" element={<Cart />} />
          <Route path="/payement" element={<Payement />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
