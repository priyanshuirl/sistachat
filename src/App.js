import React, { useRef, useState } from 'react';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyAnwCas3WWmywhJQ7_tCrADvC_hHOPQP6Q",
  authDomain: "sistachat-edd3e.firebaseapp.com",
  projectId: "sistachat-edd3e",
  storageBucket: "sistachat-edd3e.appspot.com",
  messagingSenderId: "264187157963",
  appId: "1:264187157963:web:6e191eaf1c3633e7a1ea4e",
  measurementId: "G-7XK5127ZXV"
})

const auth = firebase.auth();
const firestore = firebase.firestore();


function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1>sistachat</h1>
        <p>Made By <b>Priyanshu Mishra</b></p>
        <SignOut />
      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>

    </div>
  );
}

function SignIn() {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <div className="intro">
      <h1>Welcome to sistachat</h1>
      <p>A place for you to discuss your Experiences, Ideas, Problems and Solutions with other people.</p>
      <button className="sign-in" onClick={signInWithGoogle}>Continue with Google</button>
      <p>Made By <b>Priyanshu&nbsp;Mishra</b></p>
    </div>
  )

}

function SignOut() {
  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}>Sign&nbsp;Out</button>
  )
}


function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');


  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (<>
    <main>

      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

      <span ref={dummy}></span>

    </main>

    <form onSubmit={sendMessage} >

      <input value={formValue} id="input" onChange={(e) => setFormValue(e.target.value)} placeholder="Type your message..." />

      <button type="submit" id="button" disabled={!formValue}>Send</button>

    </form>
  </>)
}


function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (<>
    <div className={`message ${messageClass}`}>
      <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} alt='' />
      <p>{text}</p>
    </div>
  </>)
}


export default App;




