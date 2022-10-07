import styles from '../styles/Tweet.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrash} from '@fortawesome/free-solid-svg-icons';

function Tweet(props) {
    
    return(
        <div className = {styles.tweetBody}>
            <div className = {styles.userInfos}>
                <img className = {styles.img} src="/twitter-avatar.jpg"></img>
                <div className = {styles.textInfos} class = "textInfos">
                    
                    <p className = {styles.firstname}>John{props.firstname}<span className = {styles.username}> @JohnCena{props.username} • 5 hours {props.time} </span></p>
                </div>
            </div>
            <p className = {styles.tweet}>Hello everyone! {props.message}</p>
            <div className = {styles.icons}>
                <div className = {styles.heart}>
                <FontAwesomeIcon className = {styles.icon} icon={faHeart} />
                <span>0</span>
                </div>
            <FontAwesomeIcon className = {styles.icon} icon={faTrash} />
            </div>
        </div>
    )
}

export default Tweet;