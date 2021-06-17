import { API_GET_USERS, API_GET_USER_POSTS } from '../../utils/api';
import {
    fetchPostsAmount,
    fetchPostsAmountError,
    fetchUsers,
    fetchUsersError,
    fetchUsersSuccess,
    setPagination,
    setPostsAmount,
} from './actionCreators';

// Хранит уникальные id запросов.
const requestsSet = new Set();

// Загрузка пользователей.
export const getUsers = (page) => (dispatch) => {
    requestsSet.clear();

    dispatch(fetchUsers());

    fetch(API_GET_USERS(page))
        .then((response) => {
            if (!response.ok) {
                throw new Error('Во время загрузки произошла ошибка.');
            }

            return response;
        })
        .then((response) => response.json())
        .then((users) => {
            console.log(users);
            dispatch(setPagination(users.meta.pagination));
            dispatch(fetchUsersSuccess(users.data));
        })
        .catch((error) => dispatch(fetchUsersError(error)));
};

// Загрузка кол-ва постов.
export const getPostsAmount = (id) => (dispatch) => {
    // Зашита от дублирования запросов.
    if (requestsSet.has(id)) {
        return;
    }

    requestsSet.add(id);

    dispatch(fetchPostsAmount());

    fetch(API_GET_USER_POSTS(id))
        .then((response) => {
            if (!response.ok) {
                throw new Error('Ошибка');
            }

            return response;
        })
        .then((response) => response.json())
        .then((data) => dispatch(setPostsAmount(id, data.meta.pagination.total)))
        .catch((err) => dispatch(fetchPostsAmountError(err)));
};
