import React from "react";
import git from '../images/github.png';
import youtube from '../images/youtube.png';
import react from '../images/react.png';

export default function Footer() {
    return (
        <footer>
            <hr />
            <div className="icons">
                <img 
                    src={youtube}
                />
                <img 
                    src={git}
                />
                <img 
                    src={react}
                    className="react"
                />
            </div>
        </footer>
    );
}
