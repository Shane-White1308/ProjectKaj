import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Product from "./pages/Product";
import Signup from "./pages/Signup";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/collection/:name" element={<Collection />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/product/:id" element={<Product />} />
                <Route path="/signup" element={<Signup/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
