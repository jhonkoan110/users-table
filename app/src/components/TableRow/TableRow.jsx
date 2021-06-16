import PropTypes from 'prop-types';
import { formatDate } from '../../utils/dateFormatter';
import { EmailCol } from '../EmailCol/EmailCol';
import styles from './TableRow.module.css';

export const TableRow = ({ user }) => {
    return (
        <div className={styles.container}>
            <div className={[styles.col, styles.col1].join(' ')}>{user.name}</div>
            <EmailCol id={user.id} email={user.email} />
            <div className={[styles.col, styles.col3].join(' ')}>{formatDate(user.created_at)}</div>
        </div>
    );
};

TableRow.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        gender: PropTypes.string,
        status: PropTypes.string,
        created_at: PropTypes.string.isRequired,
        updated_at: PropTypes.string,
    }),
};
