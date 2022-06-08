import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Switch } from "react-router-dom";
import Home from './components/Home/Home';
import MovieDetail from './MovieDetail/MovieDetail';
import PageNotFound from './PageNotFound/PageNotFound';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/movie/:imdbID" element={<MovieDetail />} />
          <Route element={<PageNotFound />} />
        </Routes>
        <Footer />

      </Router>
    </div>
  );
}

export default App;
