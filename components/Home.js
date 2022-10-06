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
  const [isSignInModalVisible, setSignInIsModalVisible] = useState(false);
  const [isSignUpModalVisible, setSignUpIsModalVisible] = useState(false);
	const [signUpUsername, setSignUpUsername] = useState('');
	const [signUpPassword, setSignUpPassword] = useState('');
  const [signUpFirstname, setsignUpFirstname] = useState('');
	const [signInUsername, setSignInUsername] = useState('');
	const [signInPassword, setSignInPassword] = useState('');

  const showSignInModal = () => {
    console.log("click SignIn");

		setSignInIsModalVisible(!isSignInModalVisible);
	};

  const showSignUpModal = () => {
    console.log("click SignUp");
		setSignUpIsModalVisible(!isSignUpModalVisible);
    console.log(isSignUpModalVisible);
	};

////////////////////////////////////////SIGNUP MODAL////
//Contenu//
let modalSignUpContent = (
			<div className={styles.registerContainer}>
				<div className={styles.registerSection}>
        <p>Create your Hackatweet account</p>
					<input type="text" placeholder="Firstname" id="signUpFirstname" onChange={(e) => setsignUpFirstname(e.target.value)} value={signUpFirstname} />
          <input type="text" placeholder="Username" id="signUpUsername" onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername} />
					<input type="password" placeholder="Password" id="signUpPassword" onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword} />
					<button id="register" onClick={() => handleRegister()}>Register</button>
				</div>
			</div>
		);
  //////////Fonctions//////
  // const handleRegister = () => {
	// 	fetch('http://localhost:3000/users/signup', {
	// 		method: 'POST',
	// 		headers: { 'Content-Type': 'application/json' },
	// 		body: JSON.stringify({ username: signUpUsername, password: signUpPassword }),
	// 	}).then(response => response.json())
	// 		.then(data => {
	// 			if (data.result) {
	// 				dispatch(login({ username: signUpUsername, token: data.token }));
	// 				setSignUpUsername('');
	// 				setSignUpPassword('');
	// 				setIsModalVisible(false)
	// 			}
	// 		});
	// };

  ////////////////////////////////////////SIGNIN MODAL////

  let modalSignInContent = (
    <div className={styles.registerContainer}>
      
      <div className={styles.registerSection}>
        <p>Sign-in to your Hackatweet account</p>
        <input type="text" placeholder="Username" id="signInUsername" onChange={(e) => setSignInUsername(e.target.value)} value={signInUsername} />
        <input type="password" placeholder="Password" id="signInPassword" onChange={(e) => setSignInPassword(e.target.value)} value={signInPassword} />
        <button id="connection" onClick={() => handleConnection()}>Connect</button>
      </div>
    </div>
  );

  // const handleConnection = () => {

	// 	fetch('http://localhost:3000/users/signin', {
	// 		method: 'POST',
	// 		headers: { 'Content-Type': 'application/json' },
	// 		body: JSON.stringify({ username: signInUsername, password: signInPassword }),
	// 	}).then(response => response.json())
	// 		.then(data => {
	// 			if (data.result) {
	// 				dispatch(login({ username: signInUsername, token: data.token }));
	// 				setSignInUsername('');
	// 				setSignInPassword('');
	// 				setIsModalVisible(false)
	// 			}
	// 		});
	// };

	////RETURN/////

  return (
    <div>
    <div className = {styles.body}>
      <div className = {styles.leftContainer} ></div>
      <div className = {styles.rightContainer}>
        <img src="public/favicon.ico"></img>
        <h1 className = {styles.h1}>See what's happening</h1>
        <div class = "buttons">
          <h2 className = {styles.h2}>Join Hackatweet today.</h2>
          <div onClick={() => showSignUpModal()} class = "signUp composant"><SignUp/></div>
          <h3 className = {styles.h3}>Already have an account?</h3>
          <div onClick={() => showSignInModal()} class = "signIn composant"><SignIn/></div>
        </div>
      </div>
    </div>
    {isSignInModalVisible && <div id="react-modals">
				<Modal getContainer="#react-modals" className={styles.modal} visible={isSignInModalVisible} closable={false} footer={null}>
					{modalSignInContent}
				</Modal>
			</div>}
    <Modal getContainer="#react-modals" className={styles.modal} visible={isSignUpModalVisible} closable={false} footer={null}>
					{modalSignUpContent}
		</Modal>
    </div>
  );
}


export default Home;
