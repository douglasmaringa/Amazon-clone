// setup data layer
import React from 'react'
import { createContext,useContext,useReducer } from 'react'


export const StateContext = createContext()

// build a provider

export const StateProvider = ({reducer , initialState , children}) => (
    <StateContext.Provider value={useReducer(reducer,initialState)}>
      {children}
    </StateContext.Provider>
)
   

export const useStateValue = () => useContext(StateContext)