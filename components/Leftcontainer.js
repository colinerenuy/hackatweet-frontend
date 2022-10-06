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

  return (
    <div>
      <div className={styles.leftContainer}>
        <img className={styles.Logotwitter} src="/twitter-icon-black.png"></img>
        <div className={styles.bottomContainer}>
          <div className={styles.LogoUser}></div>
          <div className={styles.Testname}>Testname</div>
          <div className={styles.Testusername}>@Testusername</div>
          <button className={styles.Logout}>Logout</button>
        </div>
      </div>
    </div>
  );
}

export default LeftContainer;
