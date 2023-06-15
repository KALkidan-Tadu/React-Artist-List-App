// // import logo from './logo.svg';
// // import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
        
//       </header>
//     </div>
//   );
// }

// export default App;

import Navbar from './NavBar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Create from './Create';
import ArtistDetails from './ArtistDetails';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            {/* <Route exact path="/">
              <Home />
            </Route> */}
            <Route path="/" element={<Home />} />
            {/* <Route path="/create">
              <Create />
            </Route> */}
            <Route path="/blogs/:id" element={<ArtistDetails />}/>
              
            <Route path="*" element={<NotFound />}/>
              
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;