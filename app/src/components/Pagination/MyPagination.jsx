import Pagination from '@material-ui/lab/Pagination';
import PropTypes from 'prop-types';

export const MyPagination = ({ currentPage, pages, onChange }) => {
    return (
        <Pagination
            page={currentPage}
            count={pages}
            siblingCount={1}
            onChange={onChange}
            boundaryCount={2}
            color="primary"
        />
    );
};

MyPagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    pages: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
};
