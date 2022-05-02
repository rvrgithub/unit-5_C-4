import { Link } from "react-router-dom"
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Logout } from "./components/Logout";
import { NewOrder } from "./components/NewOrder";
import { Orders } from "./components/Orders";
import { ProtectedRoute } from "./components/ProtextedRoute";
import { Routes, Route } from "react-router-dom";
import "./App.css"
function App() {
  // const data = [
  //   { title: "Home", to: "/"},
  //   { title: "Login", to: "/login"},
  //   { title: "Logout", to: "/logout"},
  //   { title: "Neworder", to: "/neworder"},
  //   { title: "Orders", to: "/orders"},
  //   { title: "ProtectedRoute", to: "/protectedRoute"},
  
  // ]
  return (
    <div className="App">
      <div>
        <Link className="nav-home" to="/">
          Home
        </Link>
        {/* Show either login or logout below */}
        <Link className="nav-logout" to="/logout">
          Logout
        </Link>
        <Link className="nav-login" to="/login">
          Login
        </Link>
        <Link className="nav-login items" to="/orders">
          Orders
        </Link>
        <Link className="nav-login items" to="/NewOrder">
          NewOrder
        </Link>
        {/* {data.map((el, i) => 
        <Link className="LinkBtn" key={i} to={el.to} > {el.title} </Link>
      )} */}

      </div>

      <Routes>
        {/* Routes are as follows:
        Route      Component
        /           Home
        /login      Login
        /logout     Logout
        /orders     Orders    Protected
        /neworder   NewOrder  Protected
        */}

        <Route path="/" element={<Home/>}></Route>
        <Route  path="/login" element={<Login/>}></Route>
        <Route path="/logout" element={<Logout/>}></Route>
        <Route path="/orders" element={<Orders/>}></Route>
        <Route path="/neworder" element={<NewOrder/>}></Route>
        <Route path="/protectedRoute" element={<ProtectedRoute/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
