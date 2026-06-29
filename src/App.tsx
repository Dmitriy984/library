
import { useState } from "react";
import BooksPage from "./pages/books/books";
import ReadersPage from "./pages/readers/readers";
import ProfilePage from "./pages/profile/profile";
import { Route, Routes } from "react-router-dom"
import Layout from "./components/common/Layout/Layout";

function App() {
  return (
  <Routes>
<Route path="/" element={<Layout />}>
      <Route path='/' element={<BooksPage />}></Route>
      <Route path='/readers' element={<ReadersPage/>}></Route>
      <Route path='/readers/:id' element={<ProfilePage/>}></Route>
    </Route >
  </Routes>
  

  )
}

export default App;
