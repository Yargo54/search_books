import React from "react";
import "./Header.css";

function Header() {
    return (
        <div className="header">
            <h1 className="header-text">Search for books</h1>
            <div className="div-search">
                <input type="text" placeholder="Введите название книги для поиска..." className="input-search" />
                <button className="button-search"></button>
            </div>
            <div className="sorting-categories-menu">
                <div className="div-categories">
                    <span className="text-categories">Categories</span>
                    <select className="select-categories">
                        <option>all</option>
                        <option>art</option>
                        <option>biografy</option>
                        <option>computers</option>
                        <option>history</option>
                        <option>medical</option>
                        <option>poetry</option>
                    </select>
                </div>
                <div className="div-sorting">
                    <span className="text-sorting-by">Sorting by</span>
                    <select className="select-sorting-by">
                        <option>relevance</option>
                        <option>newest</option>
                    </select>
                </div>
            </div>
        </div>
    )
};

export default Header;