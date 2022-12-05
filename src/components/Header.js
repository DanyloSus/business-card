import React from "react";
import photo from '../images/github.png';

export default function Header() {
    return (
        <header>
            <h1 align="center">Random guy</h1>
            <div id="butt">
                <a href="https://github.com/DanyloSus">
                    <div className="butt git">
                        <img 
                            src={photo}
                        />
                        <p>GitHub</p>
                    </div>
                </a>
            </div>
            <hr />
        </header>
    );
}