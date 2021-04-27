import React, { useEffect, useContext, useReducer } from 'react'
import { useProductsContext } from './products_context'
import reducer from '../reducer/filter_reducer'
import {
    LOAD_PRODUCTS,
    FILTER_PRODUCTS,
    SORT_PRODUCTS,
    SET_GRIDVIEW,
    SET_LISTVIEW,
    UPDATE_FILTERS,
    UPDATE_SORT
} from '../actions'

const initialState = {
    filtered_products: [],
    all_products: [],
    grid_view: true,
    sort: 'price-lowest',
    filters: {
        text: '',
        company: 'all',
        category: 'all',
        color: 'all',
        min_price: 0,
        max_price: 0,
        price: 0,
        shipping: false,
    },
}

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
    const { products } = useProductsContext();
    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
        dispatch({ type: LOAD_PRODUCTS, payload: products })
    }, [products])

    // useEffect(() => {
    //     //     dispatch({ type: FILTER_PRODUCTS })
    //     dispatch({ type: SORT_PRODUCTS })
    // },[products])

    useEffect(() => {
     dispatch({type:SORT_PRODUCTS})
    },[products,state.sort])

    const updateSort = (e) => {
        const value = e.target.value
        dispatch({ type: UPDATE_SORT, payload: value })
    }
    return (
        <FilterContext.Provider value={{ ...state, updateSort, }}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilterContext = () => {
    return useContext(FilterContext)
}