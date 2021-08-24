import React from "react";
import BookCard from "./BookCard";
import BookInfo from "./BookInfo";
import "./Main.css"

function Main() {
    return(
        <div className="main">
            {/* <div className="found-text">Found 446 result</div> */}
            {/* <div className="book-card-list">
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
            </div> */}
            <div className="book-card-info">
                <BookInfo />
            </div>
        </div>
    );
};

export default Main;