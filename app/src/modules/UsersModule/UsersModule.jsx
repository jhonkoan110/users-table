import { getUsers } from './asyncActions';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UserList } from '../../components/UserList';
import { usersSelector } from './selectors';
import styles from './UsersModule.module.css';

export const UsersModule = () => {
    const dispatch = useDispatch();
    const { users, isLoading, error, page } = useSelector((state) => usersSelector(state));

    useEffect(() => {
        dispatch(getUsers(page));
    }, [dispatch, page]);

    if (isLoading) return <p className={styles.center}>Идёт загрузка пользователей...</p>;

    if (error) return <p className={styles.center}>{error}</p>;

    return <UserList users={users} />;
};
