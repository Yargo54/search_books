import React from "react";
import "./Header.css";
import { loadBook } from "../state/actions";
import { useDispatch, useSelector } from "react-redux";
import { sortBook } from "../state/actions";

function Header() {

    const dispatch = useDispatch();
    let start = useSelector(state => state.start)
    
    return (
        <div className="header">
            <h1 className="header-text">Search for books</h1>
            <div className="div-search">
                <input 
                    type="text" 
                    placeholder="Введите название книги для поиска..." 
                    className="input-search"
                    id = "input-search-id"
                />
                <button className="button-search" onClick={() => {
                    if(document.getElementById("select-categories").value === "All"){
                        dispatch(loadBook(
                            start, 
                            document.getElementById("input-search-id").value, 
                            ''
                        ))
                    } else {
                        dispatch(loadBook(
                            start, 
                            document.getElementById("input-search-id").value, 
                            document.getElementById("select-categories").value
                        ))
                    }
                    
                }}></button>
            </div>
            <div className="sorting-categories-menu">
                <div className="div-categories">
                    <span className="text-categories">Categories</span>
                    <select className="select-categories" id="select-categories">
                        <option value="All">all</option>
                        <option value="Art">art</option>
                        <option value="Biografy">biografy</option>
                        <option value="Computers">computers</option>
                        <option value="History">history</option>
                        <option value="Medical">medical</option>
                        <option value="Poetry">poetry</option>
                    </select>
                </div>
                <div className="div-sorting">
                    <span className="text-sorting-by">Sorting by</span>
                    <select className="select-sorting-by" onClick={() => sortBook()}>
                        <option value="relevance">relevance</option>
                        <option value="newest">newest</option>
                    </select>
                </div>
            </div>
        </div>
    )
};

export default Header;