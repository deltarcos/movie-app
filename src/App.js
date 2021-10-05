import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Main from './components/Main';
import MovieDetail from './components/MovieDetail';
import { Route } from 'react-router-dom'

const App = () => {
    return (
        <>
          <Route exact path="/"><Main/></Route>
          <Route path="/details"><MovieDetail/></Route>
          <Footer/>
       </>
  );
}

export default App;
