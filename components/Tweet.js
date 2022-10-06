import styles from '../styles/Tweet.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrash} from '@fortawesome/free-solid-svg-icons';

function Tweet() {

    return(
        <div className = {styles.tweetBody}>
            <div className = {styles.userInfos}>
                <img className = {styles.img} src="/twitter-avatar.jpg"></img>
                <div className = {styles.textInfos} class = "textInfos">
                    
                    <p className = {styles.firstname}>John<span className = {styles.username}> @JohnCena • 5 hours </span></p>
                </div>
            </div>
            <p className = {styles.tweet}>Hello everyone!</p>
            <div className = {styles.icons}>
            <FontAwesomeIcon className = {styles.icon} icon={faHeart} />
            <FontAwesomeIcon className = {styles.icon} icon={faTrash} />

            </div>
        </div>
    )
}

export default Tweet;