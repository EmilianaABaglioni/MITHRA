import loading from '../../assets/loading.gif';
import styles from './Styles/Loading.module.scss';

const Loading = () => {
    return (
        <div>
            <img src={loading} alt="Loading..." className={styles.loading} />
        </div>
    );
};

export default Loading;