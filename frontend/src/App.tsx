import './App.css';
import { Carousel } from './layouts/Homepage/Carousel';
import { ExploreBooks } from './layouts/Homepage/ExploreBook';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';

function App() {
  return (
      <div>
        <Navbar/>
        <ExploreBooks/>
        <Carousel/>
      </div>
     
  );
}

export default App;
