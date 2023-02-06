import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import IndexPage from "./pages/IndexPage";
import PagePackages from "./pages/hosts/PagePackages";
import PageHosts from "./pages/packages/PageHosts";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route path={"/"} element={<IndexPage />}/>
                    <Route path={"/hosts"} element={<PageHosts />}/>
                    <Route path={"/packages"} element={<PagePackages />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
