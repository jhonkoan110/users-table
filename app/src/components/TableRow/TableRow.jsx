import PropTypes from 'prop-types';
import { cutStringLength } from '../../utils/cutStringLength';
import { EmailCol } from '../EmailCol/EmailCol';
import moment from 'moment';
import styles from './TableRow.module.css';
import cn from 'classnames';

export const TableRow = ({ user }) => {
    return (
        <div className={styles.container}>
            <div className={cn(styles.col, styles.col1)}>{cutStringLength(user.name, 35)}</div>

            <EmailCol id={user.id} email={user.email} postsAmount={user.postsAmount} />

            <div className={cn(styles.col, styles.col3)}>{moment(user.created_at).format('DD.MM.YYYY hh:mm:ss')}</div>
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
