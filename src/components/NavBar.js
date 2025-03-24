import React from 'react'
import {Link,useLocation} from 'react-router-dom'

const NavBar=(props) => {
    
    let location=useLocation();
    
    return (
        <nav className="navbar navbar-expand-lg fixed-top bg-body-tertiary"  data-bs-theme={props.mode}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">NewsMonkey</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/business" ? "active" : ""}`} to="/business">Business</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/entertainment" ? "active" : ""}`} to="/entertainment">Entertainment</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/general" ? "active" : ""}`} to="/general">General</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/health" ? "active" : ""}`} to="/health">Health</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/science" ? "active" : ""}`} to="/science">Science</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/sports" ? "active" : ""}`} to="/sports">Sports</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/technology" ? "active" : ""}`} to="/technology">Technology</Link>
                        </li>
                    </ul>
                    <div className={`form-check form-switch text-${props.mode==='light' ? 'dark' : 'light'}`} style={{display:'flex',justifyContent:'flex-start'}}>
                        <label className="form-check-label">Light</label>
                        <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault" style={{margin:'auto 8px'}}/>
                        <label className="form-check-label">Dark</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
