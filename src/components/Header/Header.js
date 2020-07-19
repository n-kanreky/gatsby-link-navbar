import React from "react"
import { Link } from "gatsby"
import "./Header.css"

const Header = props => {
  // ナビゲーションバーに表示するリンク
  const NavMenuItem = ["Home", "About", "Skills", "Hobby", "Link"]

  // 普段のリンクはこのスタイル
  const LinkStyles = {
    background: "rebeccapurple",
    color: "white",
    fontWeight: "normal",
  }

  // アクティブになったリンクは色を反転させる
  const ActiveStyles = {
    background: "white",
    color: "rebeccapurple",
    fontWeight: "bold",
  }

  // ナビゲーションリンクの作成
  const NavMenuLiTag = NavMenuItem.map(item => {
    let page_link = ""
    if (item === "Home") {
      page_link = "/"
    } else page_link = "/" + item.toLowerCase() + "/"

    return (
      <li key={page_link}>
        <Link
          to={page_link}
          style={LinkStyles}
          activeStyle={ActiveStyles}
          className="page-link"
        >
          {item}
        </Link>
      </li>
    )
  })

  return (
    <header className="App-header">
      <nav className="App-navbar">
        <p className="App-logo">
          <Link to="/">koralle</Link>
        </p>
        <div className="App-navbar-item">
          <ul>{NavMenuLiTag}</ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
