import "./app.css";
import Home from "./pages/home/Home";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,

} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import React, { useContext } from 'react';
import Login from "./pages/login/Login";
import SharedComponent from "./components/SharedComponent";
import { AuthContext } from "./context/authContext/AuthContext";
import ListList from "./pages/listList/ListList";
import List from "./pages/list/List";
import NewList from "./pages/newList/NewList";
import NewMovie from "./pages/newMovie/NewMovie";
import Movie from "./pages/movie/Movie";


function App() {
  const { user } = useContext(AuthContext)


  return (
    <Router>
      <div className="container">
        <Routes>
          {user && (
            <>
              <Route element={<SharedComponent />}>
                <Route exact path="/" element={<Home />}></Route>
                <Route path="/users" element={<UserList />}></Route>
                <Route path="/user/:userId" element={<User />}></Route>
                <Route path="/newUser" element={<NewUser />}></Route>
                <Route path="/movies" element={<ProductList />}></Route>
                <Route path="/lists" element={<ListList />}></Route>
                <Route path="/list/:listId" element={<List />}></Route>
                {/* <Route path="/newProduct" element={<ProductList />}></Route> */}
                <Route path="/newmovie" element={<NewMovie />}></Route>
                <Route path="/product/:productId" element={<Movie />}></Route>
                {/* <Route path="/product/:productId" element={<Product />}></Route> */}
                <Route path="/newList" element={<NewList />}></Route>
              </Route>
            </>
          )}
          <Route path="/login" element={user ? <Navigate to="/"/> : <Login />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
