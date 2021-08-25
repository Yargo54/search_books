import React from "react";
import "./BookInfo.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeBookCardList} from "../state/actions";

function BookInfo({ img, categoryBookInfo, authorBookInfo, publishingHouse, descriptionBookInfo, changeBookCardList}) {
    return (
        <div className="book-info">
            <div className="img-book-info">
                <img src={img} alt="img book" className="info-img-book"/>
            </div>
            <div className="description-book-info">
                <span className="category-book-info">{categoryBookInfo}</span>
                <h1 className="author-book-info">{authorBookInfo}</h1>
                <span className="publishing-house">{publishingHouse}</span>
                <p className="description-text">{descriptionBookInfo}</p>
                <button className="button-go-back" onClick={() => changeBookCardList()}>Назад</button>
            </div>
        </div>
    );
};

const putStateToProps = (state) => {
    return {
        img: state.img,
        categoryBookInfo: state.categoryBookInfo,
        authorBookInfo: state.authorBookInfo,
        publishingHouse: state.publishingHouse,
        descriptionBookInfo: state.descriptionBookInfo
    }
}

const putActionsToProps = (dispath) => {
    return {
        changeBookCardList: bindActionCreators(changeBookCardList, dispath)
    }
}

export default connect (putStateToProps, putActionsToProps)(BookInfo);