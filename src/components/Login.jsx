import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase";

export const Login = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.currentTarget.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  return (
    <>
      {user ? (
        <Navigate to={`/index/`} />
      ) : (
        <>
          <h1>ログイン画面です</h1>
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
        </>
      )}
    </>
  );
};
