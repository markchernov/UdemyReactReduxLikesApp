export function selectBook(book) {
    console.log("Selected: ", book.title);
    //ActionCreator
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}