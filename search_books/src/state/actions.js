import { CHANGE_BOOK_CARD_LIST, FIND_BOOK, ID_BOOK, SORT_BOOK, IS_FETCHING, CHANGE_START } from "./actionsType";

export const changeBookCardList = () => {
    return {
        type: CHANGE_BOOK_CARD_LIST,
        payload: "book-card-list"
    };
};

export const receiveIdBook = (id) => {
    return {
        type: ID_BOOK,
        payload: {
            id: id,
            classNameMain: "book-card-info"
        }
    };
};

export const idBook = (id) => (dispatch) => {
    dispatch(receiveIdBook(id))
}

export const findBook = (repos) => {
    return {
        type: FIND_BOOK,
        payload: {
            repos: repos.items, 
            classNameMain: "book-card-list",
            foundCount: repos.totalItems
        }
    };
};

export const changeStartIndex = (index) =>{
    return {
        type: CHANGE_START,
        payload: index
    }
}

export const sortBook = () => {
    return {
        type: SORT_BOOK
    }
}

export const setIsFetching = (bool) => {
    return {
        type: IS_FETCHING,
        payload: bool
    }
}

export const loadBook = (start, text, filtr) => (dispatch) => {
    dispatch(setIsFetching(true))
    if(filtr !== '') {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${text}+subject:${filtr}&startIndex=${start}&maxResults=30&key=AIzaSyA8o1lCTefxo-KvhUkc8KdtFXMU3QQMFFc`)
        .then(res => res.json())
        .then(data => {
            console.log(data.items);
            dispatch(findBook(data));
        })
        .catch(error => {
            alert(`Произошла ошибка ${error}`)
        });
        dispatch(changeStartIndex(start))
    } else {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${text}&startIndex=${start}&maxResults=30&key=AIzaSyA8o1lCTefxo-KvhUkc8KdtFXMU3QQMFFc`)
        .then(res => res.json())
        .then(data => {
            console.log(data.items);
            dispatch(findBook(data));
        })
        .catch(error => {
            alert(`Произошла ошибка ${error}`)
        });
        dispatch(changeStartIndex(start))
    }
    
}