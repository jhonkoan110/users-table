import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../../modules/UsersModule/actionCreators';
import { MyPagination } from '../Pagination';
import styles from './TableFooter.module.css';

export const TableFooter = () => {
    const dispatch = useDispatch();
    const currentPage = useSelector((state) => state.usersList.page);
    const pagination = useSelector((state) => state.usersList.pagination);

    const onChangePageHandler = (e, page) => {
        dispatch(setPage(page));
    };

    return (
        <div className={styles.container}>
            {pagination.pages && (
                <MyPagination currentPage={currentPage} pages={pagination.pages} onChange={onChangePageHandler} />
            )}
        </div>
    );
};
