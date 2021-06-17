import {
    FETCH_POSTS_AMOUNT,
    FETCH_POSTS_AMOUNT_ERROR,
    FETCH_POSTS_AMOUNT_SUCCESS,
    FETCH_USERS,
    FETCH_USERS_ERROR,
    FETCH_USERS_SUCCESS,
    SET_PAGE,
    SET_PAGINATION,
    SET_POSTS_AMOUNT,
} from './actions';

export const fetchUsers = () => ({
    type: FETCH_USERS,
});

export const fetchUsersSuccess = (users) => ({
    type: FETCH_USERS_SUCCESS,
    payload: users,
});

export const fetchUsersError = (error) => ({
    type: FETCH_USERS_ERROR,
    payload: error,
});

export const fetchPostsAmount = () => ({
    type: FETCH_POSTS_AMOUNT,
});

export const fetchPostsAmountSuccess = (amount) => ({
    type: FETCH_POSTS_AMOUNT_SUCCESS,
    payload: amount,
});

export const fetchPostsAmountError = (error) => ({
    type: FETCH_POSTS_AMOUNT_ERROR,
    payload: error,
});

export const setPostsAmount = (id, postsAmount) => ({
    type: SET_POSTS_AMOUNT,
    payload: {id, postsAmount},
});

export const setPage = (page) => ({
    type: SET_PAGE,
    payload: page,
});

export const setPagination = (pagination) => ({
    type: SET_PAGINATION,
    payload: pagination,
});
