import PropTypes from 'prop-types';
import { TableRow } from '../TableRow';
import styles from './TableBody.module.css';

export const TableBody = ({ users }) => {
    return (
        <div className={styles.container}>
            {users.map((u) => (
                <TableRow key={u.id} user={u} />
            ))}
        </div>
    );
};

TableBody.defaultProps = {
    users: [],
};

TableBody.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
            gender: PropTypes.string,
            status: PropTypes.string,
            created_at: PropTypes.string.isRequired,
            updated_at: PropTypes.string,
        }),
    ),
};
