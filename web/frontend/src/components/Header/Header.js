// Header.js
import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="p-2">
            <div className="container mx-auto flex flex-row items-center space-x-8 justify-between">
                <nav>
                    <ul className="liens-header flex flex-row space-x-2">
                        <Link to="/" className="lien-header p-3 rounded hover:bg-gray-700 cursor-pointer transition-all duration-200">
                            Accueil
                        </Link>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
