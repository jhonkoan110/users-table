import PropTypes from 'prop-types';
import { TableBody } from '../TableBody';
import { TableFooter } from '../TableFooter';
import { TableHeader } from '../TableHeader';
import styles from './UserList.module.css';

export const UserList = ({ users }) => {
    return (
        <div className={styles.container}>
            <TableHeader />
            <TableBody users={users} />
            <TableFooter users={users} />
        </div>
    );
};

UserList.defaultProps = {
    users: [],
};

UserList.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
            gender: PropTypes.string,
            status: PropTypes.string,
            created_at: PropTypes.string.isRequired,
            updated_at: PropTypes.string,
        })
    ),
};
