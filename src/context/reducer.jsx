import { CREATE, UPDATE, DELETE } from './actions';

const reducer = (state, action) => {
    switch (action.type) {
        case CREATE: {
            return console.log("Create categorie");
        }
        case UPDATE: {
            return console.log("Update categorie");
        }
        case DELETE: {
            return console.log("Delete categorie");
        }

        default:
            return state
    }
}

export default reducer;