const Header = () => {
    return (
      <nav>
      <ul className="nav-container">
          <li className="nav-formsearch">

          </li>
          <li className="nav-kategori">
              <div>
                  <h2>Semua kategori</h2>
                  <i class="fa-solid fa-angle-down"></i>
              </div>
          </li>
          <li className="nav-hamburger">
              <i className="fa-solid fa-bars"></i>
              <i className="fa-solid fa-xmark"></i>
          </li>
      </ul>
  </nav>
    )
}

export default Header
