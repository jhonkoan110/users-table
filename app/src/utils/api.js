/**
 * Получить пользователей.
 * @param {number} page - номер страницы.
 */
export const API_GET_USERS = (page) => `https://gorest.co.in/public-api/users?page=${page}`;

/**
 * Получить кол-во постов пользователя.
 * @param {number} user_id - id пользователя.
 */
export const API_GET_USER_POSTS = (user_id) =>
    `https://gorest.co.in/public-api/posts?user_id=${user_id}`;
