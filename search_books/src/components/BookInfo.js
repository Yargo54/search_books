import React from "react";
import "./BookInfo.css";

function BookInfo() {
    return (
        <div className="book-info">
            <div className="img-book-info">
                <img src="https://cdn.pixabay.com/photo/2018/01/17/18/43/book-3088775_960_720.jpg" alt="img book" className="info-img-book"/>
            </div>
            <div className="description-book-info">
                <span className="category-book-info">Art/General</span>
                <h1 className="author-book-info">J.S. Bach The Golden Variations in Open Sorce</h1>
                <span className="publishing-house">Kendal Durele Briggs</span>
                <p className="description-text">An open score edition of Bach's Goldberg Variations</p>
            </div>
        </div>
    );
};

export default BookInfo;