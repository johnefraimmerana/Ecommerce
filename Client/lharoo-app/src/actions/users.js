import * as api from '../api';

export const getUsers = () => async (dispatch) =>{
    try {
        const {data} = await api.fetchUser();
        dispatch({type: 'FETCH_ALL', payload: data});
    } catch (error) {
        
    }

    const action = {type: 'FETCH_ALL', payload: []}

    return action;
}