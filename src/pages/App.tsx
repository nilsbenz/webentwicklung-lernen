import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import HTMLBasics from './courses/html/chapters/HTMLBasics';
import CourseHTML from './courses/html/CourseHTML';
import Home from './home/Home';

const App = () => {
  return (
    <>
      <Router>
        <div className="flex min-h-screen flex-col justify-between">
          <div>
            <Switch>
              <Route path="/courses/html/basics">
                <HTMLBasics />
              </Route>
              <Route path="/courses/html">
                <CourseHTML />
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
