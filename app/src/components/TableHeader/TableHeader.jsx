import styles from './TableHeader.module.css';
import cn from 'classnames';

export const TableHeader = () => {
    return (
        <div className={styles.container}>
            <div className={cn(styles.col, styles.col1)}>Имя</div>
            <div className={cn(styles.col, styles.col2)}>Почта</div>
            <div className={cn(styles.col, styles.col3)}>Дата регистрации</div>
        </div>
    );
};
