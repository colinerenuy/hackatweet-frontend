import styles from '../styles/HomeTweets.module.css';
import LeftContainer from './LeftContainer';

function HomeTweets() {

    return(

        <div className={styles.body}>
        <div className={styles.left}>
            <LeftContainer></LeftContainer>
        </div>

        <div className={styles.center}></div>

        <div className={styles.right}></div>

        </div>

    )
}

export default HomeTweets;