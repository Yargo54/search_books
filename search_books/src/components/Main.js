import React from "react";
import BookCard from "./BookCard";
import BookInfo from "./BookInfo";
import "./Main.css";
import { Provider, connect, useSelector, useDispatch } from "react-redux";
import store from '../index';
import { loadBook } from "../state/actions";

function Main({ classNameMain, booksSearchArray, count}) {

    const dispatch = useDispatch();
    let start = useSelector(state => state.start)
    let fetching = useSelector(state => state.isFatching)

    switch (classNameMain) {
        case "book-card-list":
            return (
                <> 
                    {fetching === false ? <div className="fetching"></div> : 
                    <>
                        <div className="found-text">
                            Found {count} result
                        </div>
                        <div className="book-card-list" >
                            {count > 0 
                                ? 
                                    booksSearchArray.map((book) => (
                                        <BookCard book = {book}/>
                                    ))
                                : 
                                    <div className="undefined">Книг не найдено</div>}
                            <div className="div-load-more">
                                {count > 0 
                                    ?
                                        <button 
                                            className="button-load-more"
                                            onClick={() => {
                                                if(start + 30 <= count && document.getElementById("select-categories").value !== "All"){
                                                    start  = start + 30
                                                    dispatch(loadBook(
                                                        start,
                                                        document.getElementById("input-search-id").value, 
                                                        document.getElementById("select-categories").value
                                                    ))
                                                } else if(start + 30 <= count && document.getElementById("select-categories").value === "All"){
                                                    start  = start + 30
                                                    dispatch(loadBook(
                                                        start,
                                                        document.getElementById("input-search-id").value, 
                                                        ''
                                                    ))
                                                } else {
                                                    alert('Все книги загружены')
                                                }
                                            }}>
                                            Load More
                                        </button>
                                    :
                                        ""
                                }
                            </div>
                        </div>
                    </>
                    }
                </> 
            )
        case "book-card-info":
            return (
                <div className="book-card-info">
                    <Provider store = {store}>
                        <BookInfo />
                    </Provider>
                </div>
            )
        default: 
            return null
    }
};

const putStateToProps = (state) => {
    return {
        classNameMain: state.classNameMain,
        booksSearchArray: state.booksSearchArray,
        count: state.count
    }
}

export default connect (putStateToProps)(Main);