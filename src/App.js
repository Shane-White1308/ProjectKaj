import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/collection/:name" element={<Collection />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/faq" element={<Faq />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
