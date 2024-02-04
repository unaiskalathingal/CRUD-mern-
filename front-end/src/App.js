import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from "./components/Product";
import Create from "./components/Create";
import Update from "./components/Update";

function App() {
  return (
<div className='App'>
<BrowserRouter>
<Routes>

 <Route path="/" element={<Product/>}> </Route>
 <Route path="/create" element={<Create/>}> </Route>
 <Route path="/update/:id" element={<Update/>}> </Route>
 

</Routes>
</BrowserRouter>

</div>
  );
}

export default App;
