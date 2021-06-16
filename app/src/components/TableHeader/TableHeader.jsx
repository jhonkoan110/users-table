import styles from './TableHeader.module.css';

export const TableHeader = () => {
    return (
        <div className={styles.container}>
            <div className={[styles.col, styles.col1].join(' ')}>Имя</div>
            <div className={[styles.col, styles.col2].join(' ')}>Почта</div>
            <div className={[styles.col, styles.col3].join(' ')}>Дата регистрации</div>
        </div>
    );
};
