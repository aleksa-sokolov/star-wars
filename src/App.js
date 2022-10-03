import {Routes, Route} from "react-router-dom";
import Main from "./pages/main";
import Films from "./pages/films";
import Planets from "./pages/planets";
import Starships from "./pages/starships";
import Characters from "./pages/characters";
import Vehicles from "./pages/vehicles";
import PersonCharacter from "./pages/person-character";
import FavoriteCharacter from "./pages/favoriteCharacter";
import Layout from "./components/layout/Layout";
import "./App.style.css";


function App() {
    return (
        <div className="main">
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/characters" element={<Characters/>}/>
                    <Route path="/favorite" element={<FavoriteCharacter/>}/>
                    <Route path="/person-character/:id" element={<PersonCharacter/>}/>
                    <Route path="/planets" element={<Planets/>}/>
                    <Route path="/starships" element={<Starships/>}/>
                    <Route path="/films" element={<Films/>}/>
                    <Route path="/vehicles" element={<Vehicles/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
