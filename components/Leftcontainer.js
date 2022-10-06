import styles from '../styles/Leftcontainer.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../reducers/user';
import Moment from 'react-moment';
import { Modal } from 'antd';
import Link from 'next/link';

function LeftContainer() {
    //const dispatch = useDispatch();
    //const [isModalVisible, setIsModalVisible] = useState(false);
  
    return (
      <div>
    
        <div className = {styles.leftContainer}>
              <div id="Logotwitter"></div>
              <div id= "LogoUser"></div>
            <span>Testname</span>
            <span>Testusername</span>
            <button id="Logout">Logout</button>
          </div>
        </div>

    );
  }
  
  export default LeftContainer;