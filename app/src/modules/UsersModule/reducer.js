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

const initialState = {
    users: [],
    isLoading: false,
    error: null,

    postsAmount: '',
    isAmountLoading: false,
    isAmountError: null,

    page: 1,
    pagination: {},
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

        case SET_POSTS_AMOUNT: {
            const { id, postsAmount } = action.payload;

            const newUsers = state.users.map((u) => {
                if (u.id === id) {
                    u.postsAmount = postsAmount;
                }

                return u;
            });

            return { ...state, users: newUsers, isAmountLoading: false };
        }

        case SET_PAGINATION: {
            return { ...state, pagination: action.payload };
        }

        case SET_PAGE: {
            return { ...state, page: action.payload };
        }

        default:
            return state;
    }
};
