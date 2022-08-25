import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

export const Index = () => {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  const logout = () => {
    signOut(auth);
    navigate("/");
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);
  return (
    <>
      <h1>インデックスだよ</h1>
      <p>{user?.email}</p>
      <button onClick={logout}>ログアウトボタン</button>
    </>
  );
};
