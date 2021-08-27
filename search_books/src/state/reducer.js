import { CHANGE_BOOK_CARD_LIST, FIND_BOOK, ID_BOOK, SORT_BOOK, IS_FETCHING, CHANGE_START } from "./actionsType";

const initialState = {
    booksSearchArray: [],
    classNameMain: "",
    idBook:'',
    count: '',
    isFatching: false,
    start: 0
};

export const reducer = (state = initialState, action) => {
    switch (action.type){
        case CHANGE_BOOK_CARD_LIST: 
            return { 
                ...state, 
                classNameMain: action.payload
            };
        case FIND_BOOK: {
            return { 
                ...state, 
                booksSearchArray: [...state.booksSearchArray, ...action.payload.repos],
                classNameMain: action.payload.classNameMain,
                count: action.payload.foundCount
            }
        }
        case ID_BOOK: {
            return {
                ...state,
                idBook: action.payload.id,
                classNameMain: action.payload.classNameMain
            }
        }
        case SORT_BOOK: {
            return {
                ...state,
                booksSearchArray: 
                [
                    ...state.booksSearchArray.sort((a, b) => 
                        (b.volumeInfo.publishedDate.split('-')[0] - a.volumeInfo.publishedDate.split('-')[0])
                    )
                ]
            }
        }
        case IS_FETCHING: {
            return {
                ...state,
                isFatching: action.payload
            }
        }
        case CHANGE_START: {
            return {
                ...state,
                start: action.payload
            }
        }
        default: 
            return state;
    }
};