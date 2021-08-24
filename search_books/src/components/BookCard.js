import React from "react";
import "./BookCard.css";

function BookCard() {
    return (
        <div className="book-card">
            <img src="https://cdn.pixabay.com/photo/2018/01/17/18/43/book-3088775_960_720.jpg" alt="img book" className="img-book"/>
            <span className="book-categorie">Computers</span>
            <p className="description">Node.js Разработка серверных веб-приложений на JavaScript</p>
            <span className="author">Дэвид Хэррон</span>
        </div>
    );
};

export default BookCard;