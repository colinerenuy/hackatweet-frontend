import styles from "../styles/Leftcontainer.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../reducers/user";
import Moment from "react-moment";
import { Modal } from "antd";
import Link from "next/link";


function LeftContainer() {
  //const dispatch = useDispatch();
  //const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();

  const loggingOut = () => {
    console.log("logging out")
    dispatch(logout())
    window.location.href = "http://localhost:3001";
  }

  return (
    
      <div className={styles.leftContainer}>
        <img className={styles.Logotwitter} src="/twitter-icon-black.png"></img>
        <div className={styles.bottomContainer}>
          <div className={styles.container}>
            <img className={styles.LogoUser} src="/twitter-avatar.jpg"></img>
            <div className={styles.namesContainer}>
              <span className={styles.name}>Testname</span>
              <span className={styles.username}>@Testusername</span>
            </div>
          </div>
          <div className = {styles.buttonContainer}>
          <button onClick={() => loggingOut()} className={styles.Logout}>Logout</button>
          </div>
        </div>
        </div>
  );
}

export default LeftContainer;
