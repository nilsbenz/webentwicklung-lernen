import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import About from './courses/html/CourseHTML';
import Home from './home/Home';

const App = () => {
  return (
    <>
      <Router>
        <div className="flex min-h-screen flex-col justify-between">
          <div>
            <Switch>
              <Route path="/courses/html">
                <About />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </>
  );
};

export default App;
