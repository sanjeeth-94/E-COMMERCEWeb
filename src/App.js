import React, { useEffect } from 'react';
import {
  HashRouter as Router, Routes, Route, Outlet, Navigate, useNavigate,
} from 'react-router-dom';
import './App.css';
import Homepages from './Componetnce/HomePage/Homepages';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './Store/Reducer';
import MainDashboad from './Componetnce/MainDashboad/MainDashboad';

function App() {
  // const navigate = useNavigate();

  useEffect(() => {
    <Navigate replace to="/" />;
  }, [])

  const store = createStore(rootReducer, {}, applyMiddleware(thunk));
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Homepages />}>
            <Route path="/MainDashboad" element={<MainDashboad />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
