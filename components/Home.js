import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../reducers/user';
import Moment from 'react-moment';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { Modal } from 'antd';
import Link from 'next/link';

function Home() {
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div>
    <div className = {styles.body}>
      <div className = {styles.leftContainer} ></div>
      <div className = {styles.rightContainer}>
        <img src="public/favicon.ico"></img>
        <h1 className = {styles.h1}>See what's happening</h1>
        <div class = "buttons">
          <h2 className = {styles.h2}>Join Hackatweet today.</h2>
          <div class = "signUp composant"><SignUp/></div>
          <h3 className = {styles.h3}>Already have an account?</h3>
          <div class = "signIn composant"><SignIn/></div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Home;
