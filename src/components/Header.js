import React from 'react';
import {Link} from 'react-router-dom';

const Header = ({onSearchChange,onButtonClick,changeLanguage}) => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid" style={{background:"#fefbd8"}}>
                <a className="navbar-brand" style={{color:"#004d00"}} >GetNewzz</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                {/* <nav class="navbar navbar-light bg-light" > */}
                    <div className="container-fluid" >
                        <form className="d-flex">
                        <input className="form-control me-2" id="searchBox" onChange={onSearchChange} style={{border:"2px solid #405d27", borderRadius:"15px"}} type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" id="search" onClick={onButtonClick} style={{background:"#d5f4e6",borderRadius:"15px"}} type="button">Search</button>
                        </form>
                    </div>
                {/* </nav> */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <Link to="/" id="en" onClick={()=>{changeLanguage("en")}}><li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">English</a>
                    </li></Link>

                    <Link to="/hi" id="hi" onClick={()=>{changeLanguage("hi")}}><li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Hindi</a>
                    </li></Link>

                    <Link to="/mr" id="mr" onClick={()=>{changeLanguage("mr")}}><li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Marati</a>
                   </li></Link>
                </ul>
                </div>
            </div>
            </nav>
        </div>
    )
}

export default Header
