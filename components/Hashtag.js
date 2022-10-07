import styles from '../styles/Hashtag.module.css';
import { useEffect, useState } from 'react';


function Hashtag() {

    const [hashtags, setHashtags] = useState([]);

  
    useEffect(() => {

        //Génère HashtagData

        fetch('http://localhost:3000/tweets')
              .then(response => response.json())
              .then(data => {
                const hashtagsArr = [];
                data.tweets.map(e => hashtagsArr.push(e.hashtag))
                //return hashtagsArr;

                const countHashtags = []
                for (let i = 0; i < hashtagsArr.length; i++) {
                    let count = {};
                    const element = hashtagsArr[i];
                    if (count[element]) {
                        count[element] += 1;
                    } else {
                        count[element] = 1;
                    }
                    countHashtags.push(count);
                    }
                console.log(countHashtags)
                setHashtags(countHashtags)

              });
    }, []);

    const display = hashtags.map((data, i) => {
        console.log(hashtags);
        console.log(data)
        return <div className = {styles.hashtag}>
        <h4 className = {styles.h4}>#{Object.keys(data)}</h4>
            <p className = {styles.counter}> {Object.values(data)} tweets</p>
        </div>
      })

    return (

        <div className={styles.body}>
            <h1 className={styles.h1}>Trends</h1>
            <div className = {styles.hashtagsContainer}>
                <div className = {styles.hashtag}>
                <h4 className = {styles.h4}>#first</h4>
                    <p className = {styles.counter}>2 tweets</p>
                </div>
                <div>{display}</div>
            </div>
        </div>

    )
}

export default Hashtag;