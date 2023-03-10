import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homeone from './pages/Homeone';
import HomeTwo from './pages/HomeTwo';
import Movie from './pages/Movie';
import MovieDetails from './pages/MovieDetails';
import TvSeries from './pages/TvSeries';
import { useEffect } from "react"
import $ from "jquery";
import Pricing from './pages/Pricing';
import Blogs from './pages/Blogs';
import BlogDetails from './pages/BlogDetails';
import ContactPage from './pages/ContactPage';
import SigninPage from './pages/SignIn'
import SignupPage from './pages/SignUp'

import Search from './pages/Search'
function App() {


  useEffect(() => {
    function preloader() {
      $('#preloader').delay(0).fadeOut();
    };
    $(window).on('load', function () {
      preloader();


    });
  })
  return (
    <div className="App">
      <Router>

        <Switch>
          <Route exact={true} path="/SignUp">
            <SignupPage />
          </Route>
          <Route exact={true} path="/SignIn">
            <SigninPage />
          </Route>


          <Route exact={true} path="/">
            <HomeTwo />
          </Route>

          {/* <Route exact={true} path="/index-2">
            <HomeTwo />
          </Route> */}

          <Route exact={true} path="/movie-Category=:Category-Page=:page" component={Movie} />


          <Route exact={true} path="/search-MovieName=:movieName-Page=:page" component={Search} />

          <Route exact={true} path="/movie-details-:movieId" component={MovieDetails} />
          {/* < />

          </Route> */}
          <Route exact={true} path="/tv-show">
            <TvSeries />

          </Route>
          <Route exact={true} path="/pricing">
            <Pricing />

          </Route>
          <Route exact={true} path="/blog">
            <Blogs />

          </Route>
          <Route exact={true} path="/blog-details">
            <BlogDetails />

          </Route>

          <Route exact={true} path="/contact">
            <ContactPage />

          </Route>


        </Switch>

      </Router>



    </div>
  );
}

export default App;
