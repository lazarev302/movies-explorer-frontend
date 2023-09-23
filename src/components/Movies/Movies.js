import React from "react"
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import SearchForm from "../SearchForm/SearchForm"
import Footer from "../Footer/Footer"
import "./Movies.css"

function Movies() {
  return (
    <main>
      <section className="movies">
        <SearchForm />
        <MoviesCardList />
        <Footer />
      </section>
    </main>
  )
}

export default Movies
