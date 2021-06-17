import * as actions from './actions';

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
        case actions.FETCH_USERS: {
            return { ...state, isLoading: true, error: null };
        }

        case actions.FETCH_USERS_SUCCESS: {
            return { ...state, isLoading: false, users: action.payload };
        }

        case actions.FETCH_USERS_ERROR: {
            return { ...state, isLoading: false, error: action.payload };
        }

        case actions.FETCH_POSTS_AMOUNT: {
            return { ...state, isAmountLoading: true, error: null };
        }

        case actions.FETCH_POSTS_AMOUNT_SUCCESS: {
            return { ...state, isAmountLoading: false, postsAmount: action.payload };
        }

        case actions.FETCH_POSTS_AMOUNT_ERROR: {
            return { ...state, isAmountLoading: false, error: action.payload };
        }

        case actions.SET_POSTS_AMOUNT: {
            const { id, postsAmount } = action.payload;

            const newUsers = state.users.map((u) => {
                if (u.id === id) {
                    u.postsAmount = postsAmount;
                }

                return u;
            });

            return { ...state, users: newUsers, isAmountLoading: false };
        }

        case actions.SET_PAGINATION: {
            return { ...state, pagination: action.payload };
        }

        case actions.SET_PAGE: {
            return { ...state, page: action.payload };
        }

        default:
            return state;
    }
};
