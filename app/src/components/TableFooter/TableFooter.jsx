import { useDispatch, useSelector } from 'react-redux';
import Pagination from '@material-ui/lab/Pagination';
import { setPage } from '../../modules/UsersModule/actionCreators';
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
                <Pagination
                    page={currentPage}
                    count={pagination.pages}
                    siblingCount={1}
                    onChange={onChangePageHandler}
                    boundaryCount={2}
                    color="primary"
                />
            )}
        </div>
    );
};
