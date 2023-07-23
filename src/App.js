import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import Home from './pages/Home';
//import About from './pages/About';
//import Cards from './pages/Cards'; // Import the Cards component
import Pagination from './Pagination'; // Import the Pagination component
import AnotherPage from './pages/AnotherPage';


// const useStyles = makeStyles({
//   list: {
//     width: 200,
//   },
// });

const LandingPage = () => {
  return (
    <div className="text-center mt-5">
      <h1>Welcome!</h1>
      <p>Hello! This is the landing page.</p>
      <Link to="/another">Go to Drawer</Link>
      <Link to="/pagination">Go to Pagination</Link>
    </div>
  );
};
const App = () => {
  return (
    <Router>
      <div className="app">
       
        <div className="content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/another" element={<AnotherPage />} />
            <Route path="/pagination" element={<Pagination />} /> {/* Add this line for Pagination */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

