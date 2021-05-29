import { Container } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import SimpleBottomNavigation from './components/Navigation/bottomNav';

function App() {
  return (
    // Browser Router BrowserRouter is used for doing client side routing with URL segments.
    // You can load a top level component for each route.
    // This helps separate concerns in your app and makes the logic/data flow more clear.
    <BrowserRouter>
	  	<Header/>
      <div className="App">
        <Container>Hello</Container>
      </div>
      <SimpleBottomNavigation/>
    </BrowserRouter>
  );
}

export default App;
