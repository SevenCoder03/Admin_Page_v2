import React from "react";
import "./navbar.css";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__logo">
                <img src="logo.svg" alt="" />
                <span>TECH HUB</span>
            </div>
            <div className="navbar__icons">
                <img src="/search.svg" alt="" className="navbar__icon" />
                <img src="/app.svg" alt="" className="navbar__icon" />
                <img src="/expand.svg" alt="" className="navbar__icon" />
                <div className="navbar__notification">
                    <img src="/notifications.svg" alt="" />
                    <span>1</span>
                </div>
                <div className="navbar__user">
                    <img
                        src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                        alt=""
                    />
                    <span>Seven</span>
                </div>
                <img src="/settings.svg" alt="" className="navbar__icon" />
            </div>
        </div>
    );
};

export default Navbar;
