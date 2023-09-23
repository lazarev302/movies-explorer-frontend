import React from "react"
import { useLocation } from "react-router-dom"
import "./MoviesCard.css"

function MoviesCard() {
  const location = useLocation()

  // Временная функция отображать фильмы
  const handleShowFilm = () => {
    const { pathname } = location
    return pathname === "/movies"
  }

  // Временная функция отображать сохранённые фильмы
  const handleShowSaveFilm = () => {
    const { pathname } = location
    return pathname === "/saved-movies"
  }

  return (
    <>
      {handleShowSaveFilm() && (
        <li className="card">
          <div className="card__wrapper">
            <img
              className="card__image"
              alt=""
            />
            <button
              className="card__like-button card__like-button_active card__like-delete"
              type="button"
            ></button>
            <div className="card__title-block">
              <h2 className="card__title">33 слова о дизайне</h2>
              <p className="card__time">1ч 37м</p>
            </div>
          </div>
        </li>
      )}
      {handleShowFilm() && (
        <>
          <li className="card">
            <div className="card__wrapper">
              <img
                className="card__image"
                alt=""
              />
              <button
                className="card__like-button card__like-button_active"
                type="button"
              ></button>
              <div className="card__title-block">
                <h2 className="card__title">33 слова о дизайне</h2>
                <p className="card__time">1ч 37м</p>
              </div>
            </div>
          </li>

          <li className="card">
            <div className="card__wrapper">
              <img
                className="card__image"
                alt=""
              />
              <button className="card__like-button" type="button"></button>
              <div className="card__title-block">
                <h2 className="card__title">33 слова о дизайне</h2>
                <p className="card__time">1ч 37м</p>
              </div>
            </div>
          </li>

          <li className="card">
            <div className="card__wrapper">
              <img
                className="card__image"
                alt=""
              />
              <button className="card__like-button" type="button"></button>
              <div className="card__title-block">
                <h2 className="card__title">33 слова о дизайне</h2>
                <p className="card__time">1ч 37м</p>
              </div>
            </div>
          </li>
        </>
      )}
    </>
  )
}

export default MoviesCard
