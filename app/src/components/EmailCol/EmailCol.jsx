import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../TableRow/TableRow.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getPostsAmount } from '../../modules/UsersModule/asyncActions';

export const EmailCol = ({ id, email, postsAmount }) => {
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.usersList.isAmountLoading);
    const error = useSelector((state) => state.usersList.isAmountError);

    const [isShowingPosts, setIsShowingPosts] = useState(false);

    const showPostsAmount = () => {
        setIsShowingPosts(true);
        if (!postsAmount && postsAmount !== 0) {
            dispatch(getPostsAmount(id));
        }
    };

    const closePostsAmount = () => {
        setIsShowingPosts(false);
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
