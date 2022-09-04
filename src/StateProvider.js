
import { createContext, useContext, useReducer } from "react";

//Prepare Data layer
export const StateContext = createContext();

//wrap your app provider datalayer for sending & dispatch
export const StateProvider = ({reducer,initialState,children})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);//pull information Datalayer