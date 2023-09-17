import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { io } from "socket.io-client";
import { useRef } from "react";
import useSingleUser from "../Hooks/useSingleUser";
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [singleUser] = useSingleUser(user?.email);
  const socket = useRef();
  console.log(onlineUsers);
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const resetPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const facebookSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, facebookProvider);
  };

  const updateUserProfile = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const logOut = () => {
    setLoading(true);

    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("current user: ", currentUser);
      if (currentUser) {
        axios
          .post(`${import.meta.env.VITE_API_URL}/jwt`, {
            email: currentUser.email,
          })
          .then((data) => {
            console.log(data.data.token);
            localStorage.setItem("access-token", data.data.token);
            setLoading(false);
          });
      } else {
        localStorage.removeItem("access-token");
      }
      setLoading(false);
      if (!loading && singleUser._id) {
        socket.current = io(`${import.meta.env.VITE_SOCKET_URL}`);
        socket.current.emit("new-user-add", singleUser._id);
        socket.current.on("get-users", (users) => {
          setOnlineUsers(users);
        });
      }
    });
    return () => {
      return unsubscribe();
    };
  }, [singleUser, user, loading]);

  const checkOnlineStatus = (chat) => {
    const chatMember = chat.members.find((member) => member !== singleUser._id);
    const online = onlineUsers.find((user) => user.userId === chatMember);
    return online ? true : false;
  };

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    signIn,
    resetPassword,
    updateUserProfile,
    logOut,
    googleSignIn,
    facebookSignIn,
    checkOnlineStatus,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
