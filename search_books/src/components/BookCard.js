import React from "react";
import "./BookCard.css";
import { connect } from "react-redux"

function BookCard( {img, categories, description, author} ) {
    return (
        <div className="book-card">
            <img src={img} alt="img book" className="img-book"/>
            <span className="book-categorie">{categories}</span>
            <p className="description">{description}</p>
            <span className="author">{author}</span>
        </div>
    );
};

const putStateToProps = (state) => {
    return {
        img: state.img,
        categories: state.categories,
        description: state.description,
        author: state.author
    };
};

export default connect (putStateToProps)(BookCard)

// export default BookCard;