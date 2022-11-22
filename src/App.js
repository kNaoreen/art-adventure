import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";
import './App.css';
import GalleryMaker from "./make-a-gallery/galleryMaker";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="make-a-gallery/" element={<GalleryMaker />} />
          </Routes>
      </BrowserRouter>
  );
}

function Home() {
    return (
        <div className="App">
            <header className="App-header">
                {/*<img src={logo} className="App-logo" alt="logo" />*/}
                <h1>Art Adventure</h1>
                <p>
                    how would you like to explore art today?
                </p>
                {/*TODO: I really wish this was an actual button! :(*/}
                <Link className="optionButton" to="make-a-gallery">make a gallery</Link>
            </header>
        </div>
    );
}

export default App;
