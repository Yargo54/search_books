import React from "react";
import BookCard from "./BookCard";
import BookInfo from "./BookInfo";
import "./Main.css";
import { Provider, connect } from "react-redux";
import { bindActionCreators } from "redux";
import store from '../index';
import { changeBookCardInfo} from "../state/actions";

function Main({ classNameMain,  changeBookCardInfo, changeBookCardList}) {
    return(
        <div className="main">
            {classNameMain === "book-card-list" ?
                <>
                    <div className="found-text">Found 446 result</div>
                    <div className="book-card-list" onClick={() => changeBookCardInfo()}>
                        <Provider store = {store}>
                            <BookCard />
                            <BookCard />
                            <BookCard />
                            <BookCard />
                        </Provider>
                    </div>
                </> :
                <>
                    <div className="book-card-info">
                        <Provider store = {store}>
                            <BookInfo />
                        </Provider>
                    </div>
                </>
            }
        </div>
    );
};

const putStateToProps = (state) => {
    return {
        classNameMain: state.classNameMain
    }
}

const putActionsToProps = (dispath) => {
    return {
        changeBookCardInfo: bindActionCreators(changeBookCardInfo, dispath),
    };
};

export default connect (putStateToProps, putActionsToProps)(Main);

// export default Main;