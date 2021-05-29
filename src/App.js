import { Container } from '@material-ui/core';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import SimpleBottomNavigation from './components/Navigation/bottomNav';
import Trending from './pages/trending/trending';
import Movies from './pages/movies/movies';
import Series from './pages/series/series';
import Search from './pages/search/search';

function App() {
  return (
    // Browser Router BrowserRouter is used for doing client side routing with URL segments.
    // You can load a top level component for each route.
    // This helps separate concerns in your app and makes the logic/data flow more clear.
    <BrowserRouter>
	  	<Header/>
      <div className="App">
        <Container>
          <Route exact path='/' component={Trending}/>
          <Route exact path='/movies' component={Movies}/>
          <Route exact path='/series' component={Series}/>
          <Route exact path='/search' component={Search}/>
          
        </Container>
      </div>
      <SimpleBottomNavigation/>
    </BrowserRouter>
  );
}

export default App;
