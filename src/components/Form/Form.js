import React from "react"
import { Link } from "react-router-dom"
import "./Form.css"
import logo from "../../images/header-logo.svg"

function Form({ title, buttonText, question, linkText, children, link }) {
  return (
    <>
      <main className="form__container">
        <Link to="/" className="logo">
          <img src={logo} alt="логотип" />
        </Link>
        <h1 className="form__title">{title}</h1>
        <form className="form" id="form" noValidate>
          {children}
          <button type="submit" className="form__button-save">
            {buttonText}
          </button>
        </form>
        <p className="form__text">
          {question}
          <Link to={link} className="form__link">
            {linkText}
          </Link>
        </p>
      </main>
    </>
  )
}

export default Form
