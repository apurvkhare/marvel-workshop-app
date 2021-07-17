import React from 'react'
import {
    ACTION_TYPES,
    dataReducer,
    initialState,
} from '../reducer/DataReducer'

export const useFetchData = (dependencyArray, fetchCallback, ...args ) => {
    const [state, dispatch] = React.useReducer(dataReducer, initialState)

    const fetchData = async () => {
        dispatch({
            type: ACTION_TYPES.FETCH_DATA_INTITATE,
        })
        const data = await fetchCallback(...args)
        if (data === null)
            dispatch({
                type: ACTION_TYPES.FETCH_DATA_FAILURE,
            })
        else
            dispatch({
                type: ACTION_TYPES.FETCH_DATA_SUCCESS,
                payload: {
                    data,
                },
            })
    }

    React.useEffect(() => {
        fetchData()
    }, dependencyArray)

    return state
}