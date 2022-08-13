import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Extra from "./pages/extra";
import Help from "./pages/help";
import Home from "./pages/home";
import LastSeen from "./pages/lastSeen";
import Ranking from "./pages/ranking";
import Setting from "./pages/setting";

export function AppRouter(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/ranking" element={<Ranking/>}/>
                <Route path="/lastseen" element={<LastSeen/>}/>
                <Route path="/extra" element={<Extra/>}/>
                <Route path="/setting" element={<Setting/>}/>
                <Route path="/help" element={<Help/>}/>
            </Routes>
        </BrowserRouter>
    )
}

