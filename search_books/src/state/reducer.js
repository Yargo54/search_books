import { CHANGE_BOOK_CARD_INFO, CHANGE_BOOK_CARD_LIST } from "./actionsType";

const initialState = {
    img: "https://cdn.pixabay.com/photo/2018/01/17/18/43/book-3088775_960_720.jpg",
    categories: "Computers",
    description: "Node.js Разработка серверных веб-приложений на JavaScript",
    author: "Дэвид Хэррон",
    classNameMain: "book-card-info",
    categoryBookInfo: 'Art/General',
    authorBookInfo: 'J.S. Bach The Golden Variations in Open Sorce',
    publishingHouse: 'Kendal Durele Briggs',
    descriptionBookInfo: "An open score edition of Bach's Goldberg Variations"
};

export const reducer = (state = initialState, action) => {
    switch (action.type){
        case CHANGE_BOOK_CARD_INFO:
            return { ...state, classNameMain: action.payload};
        case CHANGE_BOOK_CARD_LIST: 
            return { ...state, classNameMain: action.payload}
        default: 
            return state;
    }
};