import { createContext, useContext, useReducer } from "react";
import reducer from "./reducer";
import { CREATE, UPDATE, DELETE} from "./actions";

export const AppContext = createContext();

const initialState = {
    categories: [
        {id: 1, description: "Categoria 1"},
        {id: 2, description: "Categoria 2"},
        {id: 3, description: "Categoria 3"}
    ]
}

export const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const createCategorie = () => dispatch({type:CREATE, payload:"create from context"})
    const updateCategorie = () => dispatch({type:UPDATE, payload:"update from context"})
    const deleteCategorie = () => dispatch({type:DELETE, payload:"delete from context"})

    return (
        <AppContext.Provider value={{
            categories:state.categories, 
            createCategorie, 
            updateCategorie, 
            deleteCategorie,
            dispatch
        }}>
            {children}
        </AppContext.Provider>
    )
};

export const useAppContext = () => {
    return useContext(AppContext);
}