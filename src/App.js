import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import IndexPage from "./pages/IndexPage";
import PageHosts from "./pages/hosts/PageHosts";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route path={"/"} element={<PageHosts />}/>
                    <Route path={"/hosts"} element={<PageHosts />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
