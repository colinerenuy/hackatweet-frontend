import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../reducers/user';
import Moment from 'react-moment';
import { Modal } from 'antd';
import Link from 'next/link';
import LeftContainer from "./Leftcontainer";

function Home() {
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div>
    <div className = {styles.body}>
      <div className = {styles.leftContainer} >


<LeftContainer></LeftContainer>





      </div>
      <div className = {styles.rightContainer}>
        <img></img>
        <h1>See what's happening</h1>
        <div class = "buttons">
          <h2>Join Hackatweet today.</h2>
          <button id="signUp"></button>
          <h3>Already have an account?</h3>
          <button id="signIn"></button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Home;

