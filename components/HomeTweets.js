import styles from '../styles/HomeTweets.module.css';
import LeftContainer from './LeftContainer';
import Header from './Header';
import Tweet from './Tweet';
import Hashtag from './Hashtag';


function HomeTweets() {

    return(

        <div className={styles.body}>
        <div className={styles.left}>
            <LeftContainer></LeftContainer>
        </div>

        <div className={styles.center}>
        <div className = {styles.header}><Header/></div>
        <div className = {styles.tweetContainer}><Tweet/></div>
        </div>
        
        <div className={styles.right}>
            <Hashtag/></div>

        </div>

    )
}

export default HomeTweets;