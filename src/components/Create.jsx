import React, { useEffect } from "react";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
} from "firebase/auth";
import { app, auth } from "../firebase";
import { Link, Navigate } from "react-router-dom";

export const Create = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");

  const Auth = getAuth(app);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(Auth, email, password);
  };

  const handleEmailChange = (e) => {
    setEmail(e.currentTarget.value);
    console.log(email);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.currentTarget.value);
  };

  return (
    <>
      {user ? (
        <Navigate to={`/index/`} />
      ) : (
        <>
          <h1>新規作成画面</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="mail_adress">メールアドレス</label>
              <input
                type="text"
                id="mail_adress"
                placeholder="メールアドレス"
                onChange={handleEmailChange}
              />
            </div>
            <div>
              <label htmlFor="password">パスワード</label>
              <input
                type="password"
                id="password"
                placeholder="パスワード"
                onChange={handlePasswordChange}
              />
            </div>
            <button>ログイン</button>
          </form>
          <p>
            ログインページは<Link to={`/Login/`}>こちら</Link>
          </p>
        </>
      )}
    </>
  );
};
