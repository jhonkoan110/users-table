import { useState } from 'react';
import PropTypes from 'prop-types';
import { API_GET_USER_POSTS } from '../../utils/api';
import styles from '../TableRow/TableRow.module.css';

export const EmailCol = ({ id, email }) => {
    const [postsAmount, setPostsAmount] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isShowingPosts, setIsShowingPosts] = useState(false);

    const showPostsAmount = () => {
        setIsShowingPosts(true);
        setIsLoading(true);

        fetch(API_GET_USER_POSTS(id))
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Ошибка');
                }

                return response;
            })
            .then((response) => response.json())
            .then((data) => {
                setIsLoading(false);
                setPostsAmount(data.data.length);
            })
            .catch((err) => {
                setIsLoading(false);
                setError(err);
            });
    };

    const closePostsAmount = () => {
        setIsShowingPosts(false);
        setPostsAmount('');
    };
    return (
        <div className={[styles.col, styles.col2].join(' ')}>
            {isShowingPosts && (
                <div className={styles.posts}>
                    Кол-во постов: {isLoading ? 'загрузка...' : error ? 'Ошибка' : postsAmount}
                </div>
            )}
            <span onMouseOver={showPostsAmount} onMouseOut={closePostsAmount}>
                {email}
            </span>
        </div>
    );
};

EmailCol.propTypes = {
    id: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
};
