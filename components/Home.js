import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../reducers/user';
import { removeAllBookmark } from '../reducers/bookmarks';
import { removeAllHiddenArticles } from '../reducers/hiddenArticles';
import styles from '../styles/Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faXmark, faEye } from '@fortawesome/free-solid-svg-icons';
import Moment from 'react-moment';
import { Modal } from 'antd';
import Link from 'next/link';

function Home() {
  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Bonjour.js!</a>
        </h1>
      </main>
    </div>
  );
}

export default Home;
