import styles from '../styles/HomeTweets.module.css';
import LeftContainer from './LeftContainer';
import Header from './Header';
import Tweet from './Tweet';
import Hashtag from './Hashtag';
import { useEffect, useState } from 'react';


function HomeTweets() {

    //Etat tweetdata
    const [tweetData, setTweetData] = useState([]);
    
    //useEffect (dedans, changer l'état tweetData pour ajouter tous les tweets du fetch)
    useEffect(() => {
        fetch('http://localhost:3000/tweets')
          .then(response => response.json())
          .then(data => {
            console.log(data);
            setTweetData(data.tweets);
          });
      }, []);

      console.log("tweetData", tweetData);

      const tweets = tweetData.map((data, i) => {
        //trouver les tweets
        // affiche tous les articles
          return <Tweet key={i} firstname={data.firstname} username={data.username} message={data.message} time={data.date}/>; //Tweet=enfant, HomeTweets=parent
        }
       
    );

    return(

        <div className={styles.body}>
        <div className={styles.left}>
            <LeftContainer></LeftContainer>
        </div>

        <div className={styles.center}>
        <div className = {styles.header}><Header/></div>
        <div className = {styles.tweetContainer}>{tweets}</div>
        </div>
        
        <div className={styles.right}>
            <Hashtag/></div>

        </div>

    )
}

export default HomeTweets;