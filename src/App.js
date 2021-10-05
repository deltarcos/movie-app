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
          <Route exact path="/movie-app"><Main/></Route>
          <Route path="/movie-app/details"><MovieDetail/></Route>
          <Footer/>
       </>
  );
}

export default App;
