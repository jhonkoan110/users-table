import { getUsers } from './asyncActions';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UserList } from '../../components/UserList';

export const UsersModule = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.usersList.users);
    const isLoading = useSelector((state) => state.usersList.isLoading);
    const error = useSelector((state) => state.usersList.error);

    useEffect(() => {
        dispatch(getUsers(1));
    }, [dispatch]);

    if (isLoading)
        return (
            <p style={{ margin: '1rem 0', textAlign: 'center' }}>Идёт загрузка пользователей...</p>
        );

    if (error) return <p style={{ margin: '1rem 0', textAlign: 'center' }}>{error}</p>;

    return <UserList users={users} />;
};
