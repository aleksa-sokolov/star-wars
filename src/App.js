import {Routes, Route} from "react-router-dom";
import Main from "./pages/main";
import Films from "./pages/films";
import Film from "./pages/film";
import Planets from "./pages/planets";
import Starships from "./pages/starships";
import Characters from "./pages/characters";
import Vehicles from "./pages/vehicles";
import PersonCharacter from "./pages/person-character";
import FavoriteCharacter from "./pages/favoriteCharacter";
import Layout from "./components/layout/Layout";
import {SkeletonTheme} from "react-loading-skeleton";
import "./App.style.css";


function App() {
    return (
        <div className="main">
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/characters" element={<Characters/>}/>
                    <Route path="/favorite" element={<FavoriteCharacter/>}/>
                    <Route path="/person-character/:id" element={<PersonCharacter/>}/>
                    <Route path="/planets" element={<Planets/>}/>
                    <Route path="/starships" element={<Starships/>}/>
                    <Route path="/films" element={<Films/>}/>
                    <Route path="/film/:id" element={<Film/>}/>
                    <Route path="/vehicles" element={<Vehicles/>}/>
                </Route>
            </Routes>
                </SkeletonTheme>
        </div>
    );
}

export default App;
