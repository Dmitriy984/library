
import { useState } from "react";
import BooksPage from "./pages/books/books";
import ReadersPage from "./pages/readers/readers";
import ProfilePage from "./pages/profile/profile";
import { Route, Routes } from "react-router-dom"

function App() {
  return (
  <Routes>
    <Route path='/' element={<BooksPage/>}></Route>
    <Route path='/readers' element={<BooksPage/>}></Route>
    <Route path='/readers/:id' element={<BooksPage/>}></Route>
  </Routes>
  

  )
}

export default App;
