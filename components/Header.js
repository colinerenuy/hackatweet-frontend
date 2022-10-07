import styles from '../styles/Header.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Header() {
    const [tweet, setTweet] = useState('');

    const postTweet = () => {
        console.log("post Tweet");
        };
    
    const writeTweet = (value) => {
        if (tweet.length < 280) {
            setTweet(value);
        }
    }

    return(
        <div className = {styles.header}>
            <h1 className = {styles.title}>Home</h1>
            <div className = {styles.inputContainer}>
            <input className = {styles.input} type="text" placeholder="What's up?" id="postTweet" onChange={(e) => writeTweet(e.target.value)} value={tweet} />
                <div className = {styles.tweetInfos}>
                    <span className = {styles.counter}>{tweet.length}/280</span>
                    <button className = {styles.button} onClick={() => postTweet()}>Tweet</button>
                </div>
            </div>
        </div>
    )
}

export default Header;
