import { CHANGE_BOOK_CARD_INFO, CHANGE_BOOK_CARD_LIST } from "./actionsType";

export const changeBookCardInfo = () => {
    return {
        type: CHANGE_BOOK_CARD_INFO,
        payload: "book-card-info"
    };
};

export const changeBookCardList = () => {
    return {
        type: CHANGE_BOOK_CARD_LIST,
        payload: "book-card-list"
    };
};