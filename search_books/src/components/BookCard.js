import React from "react";
import { useDispatch } from "react-redux";
import { idBook } from "../state/actions";
import "./BookCard.css";

function BookCard({ book }) {

    const dispatch = useDispatch();

    return (
        <>
            <div className="book-card" id={book.id} onClick={() => dispatch(idBook(book.id))}>
                <img src={
                    book.volumeInfo.imageLinks.smallThumbnail 
                        ? 
                            book.volumeInfo.imageLinks.smallThumbnail 
                        : 
                            "https://www.hot-motor.ru/body/clothes/images/no_icon.png"
                    } 
                    alt="img book" 
                    className="img-book"/>
                <span className="book-categorie">{
                    book.volumeInfo.categories ? book.volumeInfo.categories[0].split(',')[0] : "" 
                }</span>
                <p className="description">{book.volumeInfo.title ? book.volumeInfo.title : ""}</p>
                <div className="div-author">
                    {book.volumeInfo.authors ? book.volumeInfo.authors.map((item, i) => {
                        if (i === book.volumeInfo.authors.length - 1) {
                            return <span className="author">{item}</span>
                        } else {
                            return <span className="author">{item}, </span>
                        }
                    }) : ""}
                </div>
            </div>
        </>
    );
};


export default BookCard;