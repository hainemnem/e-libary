import './App.css';
import { Carousel } from './layouts/Homepage/Carousel';
import { ExploreBooks } from './layouts/Homepage/ExploreBook';
import { Guidance } from './layouts/Homepage/Guidance';
import { SearchService } from './layouts/Homepage/SearchService';
import { Footer } from './layouts/NavbarAndFooter/Footer';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';

export const App = () =>  {
  return (
      <div>
        <Navbar/>
        <ExploreBooks/>
        <Carousel/>
        <Guidance/>
        <SearchService/>
        <Footer/>
      </div>
     
  );
}

