import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { MainRouter } from './routes/MainRouter';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/header';
import { Provider } from 'react-redux'
import { store } from './redux/store'

function App() {
  return (
    <div className="App">
      <Provider store={store} >
        <BrowserRouter>
          <Header/>
          <MainRouter/>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
