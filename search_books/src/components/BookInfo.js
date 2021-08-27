import React from "react";
import "./BookInfo.css";
import { connect, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { changeBookCardList} from "../state/actions";

function BookInfo({ idBook, changeBookCardList }) {

    const clickBook = useSelector(state => state.booksSearchArray.find(item => item.id === idBook))

    return (
        <div className="book-info">
            <div className="img-book-info">
                <img 
                src={
                    clickBook.volumeInfo.imageLinks.smallThumbnail 
                        ? 
                            clickBook.volumeInfo.imageLinks.smallThumbnail 
                        : 
                            "https://www.hot-motor.ru/body/clothes/images/no_icon.png"
                } 
                    alt="img book" className="info-img-book"/>
            </div>
            <div className="description-book-info">
                <span className="category-book-info">{
                    clickBook.volumeInfo.categories 
                        ? 
                            clickBook.volumeInfo.categories 
                        : 
                            ""}
                </span>
                <h1 className="title-book-info">{
                    clickBook.volumeInfo.title 
                        ? 
                            clickBook.volumeInfo.title 
                        : 
                            ""}
                </h1>
                <span className="author-book-info">{
                    clickBook.volumeInfo.authors 
                        ? 
                            clickBook.volumeInfo.authors.map((item, i) => {
                                if (i === clickBook.volumeInfo.authors.length - 1) {
                                    return <span className="author">{item}</span>
                                } else {
                                    return <span className="author">{item}, </span>
                                }
                            })
                        : 
                            ""}
                </span>
                <p className="description-text">{
                    clickBook.volumeInfo.description 
                        ? 
                            clickBook.volumeInfo.description 
                        : 
                            "description not defined"}
                </p>
                <button className="button-go-back" onClick={() => changeBookCardList()}>Назад</button>
            </div>
        </div>
    );
};

const putStateToProps = (state) => {
    return {
        idBook: state.idBook,
    }
}

const putActionsToProps = (dispath) => {
    return {
        changeBookCardList: bindActionCreators(changeBookCardList, dispath)
    }
}

export default connect (putStateToProps, putActionsToProps)(BookInfo);