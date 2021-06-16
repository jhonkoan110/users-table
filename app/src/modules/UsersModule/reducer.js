import {
    FETCH_POSTS_AMOUNT,
    FETCH_POSTS_AMOUNT_ERROR,
    FETCH_POSTS_AMOUNT_SUCCESS,
    FETCH_USERS,
    FETCH_USERS_ERROR,
    FETCH_USERS_SUCCESS,
} from './actions';

const initialState = {
    users: [],
    isLoading: false,
    error: null,

    postsAmount: [],
    isAmountLoading: false,
    isAmountError: null,
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS: {
            return { ...state, isLoading: true, error: null };
        }

        case FETCH_USERS_SUCCESS: {
            return { ...state, isLoading: false, users: action.payload };
        }

        case FETCH_USERS_ERROR: {
            return { ...state, isLoading: false, error: action.payload };
        }

        case FETCH_POSTS_AMOUNT: {
            return { ...state, isAmountLoading: true, error: null };
        }

        case FETCH_POSTS_AMOUNT_SUCCESS: {
            return { ...state, isAmountLoading: false, postsAmount: action.payload };
        }

        case FETCH_POSTS_AMOUNT_ERROR: {
            return { ...state, isAmountLoading: false, error: action.payload };
        }

        default:
            return state;
    }
};
