import React from "react"
import Header from "../Header/Header"
import "./Layout.css"

export default ({ children }) => (
  <div className="page-root">
    <Header />
    <div className="page-body">{children}</div>
  </div>
)
