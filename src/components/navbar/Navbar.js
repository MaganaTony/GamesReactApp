import React from "react";

export default function Navbar() {
    return (
        <div className="Navbar navbar bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Game Browser</a>
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}