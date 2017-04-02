// state is that this reducer is responsible for
export default function(state = null, action) {
    console.log(action.type);
    switch(action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }
    return state;
}