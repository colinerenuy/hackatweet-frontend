import styles from '../styles/Hashtag.module.css';


function Hashtag() {

    return(

        <div className={styles.body}>
            <h1 className={styles.h1}>Trends</h1>
            <div className = {styles.hashtagsContainer}>
                <div className = {styles.hashtag}>
                <h4 className = {styles.h4}>#first</h4>
                    <p className = {styles.counter}>2 tweets</p>
                </div>
                <div className = {styles.hashtag}>
                    <h4 className = {styles.h4}>#first</h4>
                    <p className = {styles.counter}>2 tweets</p>
                </div>
            </div>
        </div>

    )
}

export default Hashtag;