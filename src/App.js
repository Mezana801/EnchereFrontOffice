import logo from './logo.svg';
//import './App.css';
import { Route, BrowserRouter as Router, Routes  } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Home from './pages/Home';
import EnchereDetail from './pages/EnchereDetail';
import LoginForm from './pages/Login';
import FilterResultList from './pages/FilterResultList';
import MiseEnchere from './pages/MiseEnchere';
import EnchereHistoric from './pages/EnchereHistoric';

import './component/assets/css/bootstrap.min.css'
import './component/assets/css/main.css'
import './component/assets/css/blue.css'
import './component/assets/css/owl.carousel.css'
import './component/assets/css/owl.transitions.css'
import './component/assets/css/animate.min.css'
import './component/assets/css/rateit.css'
import './component/assets/css/bootstrap-select.min.css'
import './component/assets/css/font-awesome.css'


function App() {
  return (
    <Router>
          <div>
              <Helmet>
                  <script src="./component/assets/js/jquery-1.11.1.min.js"></script>
  
                  <script src="./component/assets/js/bootstrap.min.js"></script>
                  
                  <script src="./component/assets/js/bootstrap-hover-dropdown.min.js"></script>
                  <script src="./component/assets/js/owl.carousel.min.js"></script>
                  
                  <script src="./component/assets/js/echo.min.js"></script>
                  <script src="./component/assets/js/jquery.easing-1.3.min.js"></script>
                  <script src="./component/assets/js/bootstrap-slider.min.js"></script>
                  <script src="./component/assets/js/jquery.rateit.min.js"></script>
                  <script src="./component/assets/js/lightbox.min.js"></script>
                  <script src="./component/assets/js/bootstrap-select.min.js"></script>
                  <script src="./component/assets/js/wow.min.js"></script>
                  <script src="./component/assets/js/scripts.js"></script>
              </Helmet>
          </div>
          <Routes>
            <Route exact path="/" element={<Home></Home>}></Route>
            <Route exact path="/filter" element={<FilterResultList></FilterResultList>}></Route>
            <Route path="/:id" element={<EnchereDetail></EnchereDetail>}></Route>
            <Route path="/login" element={<LoginForm></LoginForm>}></Route>
            <Route path="/miser/:id" element={<MiseEnchere></MiseEnchere>}></Route>
            <Route path="/myaccount" element={<EnchereHistoric></EnchereHistoric>}></Route>
          </Routes>
    </Router>
  );
}


export default App;
