import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import store from '../redux/store';
import { Provider } from 'react-redux';
import FavoriteRedux from '../components/favorite/FavoriteRedux';

function FavoriteLogin() {

    const [user, loading ] = useAuthState(auth);
    const navigate = useNavigate();
  
  
    useEffect(() => {
      if (loading) return;
      if (!user) return navigate("/login");
  
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user, loading]);
  

  return (
    <Provider store={store}>
      <FavoriteRedux />
    </Provider>
  );
}

export default FavoriteLogin;