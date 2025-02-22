import React, { useState, useEffect } from "react";
import Login from "./Login";

function Navbar({ selectedComponent, setSelectedComponent }) {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showLogin,setShowLogin] = useState(false);

  const handleItemClick = (componentName) => {
    setSelectedComponent(componentName);
    setIsBurgerMenuOpen(false);
    setShowLogin(false); 
  };

  const handleResize = () => {
    const mobile = window.innerWidth < 768;
    setIsMobile(mobile);
    if (!mobile) {
      setIsBurgerMenuOpen(false);
      setShowLogin(false); 
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleOpenLogin = () => setShowLogin(true);
  const handleCloseLogin = () => setShowLogin(false);

  return (
    <div className="container">
      <div className="logo"><span>TheStore<span className="copyright">©</span></span></div>
      <div>
        {isMobile ? (
          <div className={`burger-menu ${isBurgerMenuOpen ? "open" : ""}`}>
            <div
              className="burger-menu-toggle"
              onClick={() => setIsBurgerMenuOpen((prev) => !prev)} // Toggle open/close
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
            {isBurgerMenuOpen && ( // Render menu content only if open
              <div className="burger-menu-content">
                {["Home", "About", "Products", "Brands"].map((item) => (
                  <div
                    key={item}
                    className={`navbar-item ${selectedComponent === item ? "active" : ""}`}
                    onClick={() => handleItemClick(item)}
                  >
                    {item}
                  </div>
                ))}
                <div className="navbar-item"><span onClick={handleOpenLogin}>Login</span>
                {showLogin && <Login onClose={handleCloseLogin}></Login>}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="list">
            {["Home", "About", "Products", "Brands"].map((item) => (
              <div
                key={item}
                className={`navbar-item ${selectedComponent === item ? "active" : ""}`}
                onClick={() => handleItemClick(item)}
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="login">
        <button className="btn" onClick={handleOpenLogin}>Login</button>
        {showLogin && <Login onClose={handleCloseLogin}></Login>}
      </div>
    </div>
  );
}

export default Navbar;
