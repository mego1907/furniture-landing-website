import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navabar';
import Home from './components/Home';
import NewArrivals from './components/NewArrivals';
import FeaturedProducts from './components/FeaturedProducts';
import Blog from './components/Blog';
import Contact from './components/Contact';



function App() {
  return (
    <>
      <Navbar />
      <Home />
      <NewArrivals />
      <FeaturedProducts />
      <Blog />
      <Contact />
    </>
  );
}

export default App;
