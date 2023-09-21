import React from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import Header from "../Header/Header"
import Main from "../Main/Main"
import Footer from "../Footer/Footer"
import Register from "../Register/Register"
import Login from "../Login/Login"
import SavedMovies from "../SavedMovies/SavedMovies"
import Profile from "../Profile/Profile"
import PageNotFound from "../PageNotFound/PageNotFound"
import Movies from "../Movies/Movies"
import "./App.css"

function App() {
  const location = useLocation()

  // функция отображения Header на странице
  const shouldShowHeader = () => {
    const { pathname } = location
    return (
      pathname === "/" ||
      pathname === "/movies" ||
      pathname === "/saved-movies" ||
      pathname === "/profile"
    )
  }

  // функция отображения Footer на странице
  const shouldShowFooter = () => {
    const { pathname } = location
    return pathname === "/"
  }

  return (
    <div className="page">
      <div className="page__wrapper">
        {shouldShowHeader() && <Header />}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        {shouldShowFooter() && <Footer />}
      </div>
    </div>
  )
}

export default App
